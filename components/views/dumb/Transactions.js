import React from "react";
import PropTypes from 'prop-types'
import moment from 'moment';

import FloDataContainer from "./FloDataContainer";

const capDecimals = (num, cap = 8, maxLen = 8) => {
	let stringified
	if (typeof num !== 'string') {
		stringified = num.toString()
	} else stringified = num
	let splitted = stringified.split('.')
	if (!splitted[1]) {
		return parseFloat(splitted[0])
	}
	if (splitted[1].length > maxLen) {
		let capped = splitted[1].slice(0, cap)
		let finished = `${splitted[0]}.${capped}`
		return parseFloat(finished)
	} else {
		return parseFloat(num)
	}
}

const calculateAmount = (vin, vout, usedPubAddresses) => {
	let vinData = []
	for (let vi of vin) {
		vinData.push({address: vi.addr, valueSat: vi.valueSat})
	}
	
	let voutData = []
	for (let vo of vout) {
		const value = vo.value * 1e8 //convert to satoshi
		let addresses = []
		
		let addressesInVout = vo.scriptPubKey.addresses
		for (let addr of addressesInVout) {
			addresses.push(addr)
		}
		
		voutData.push({value, addresses})
	}
	
	let moneySentFromMe = 0
	for (let vind of vinData) {
		if (usedPubAddresses.includes(vind.address)) {
			moneySentFromMe += Number(vind.valueSat)
		}
	}
	
	let moneySentToMe = 0
	for (let voutd of voutData) {
		for (let addr of voutd.addresses) {
			if (usedPubAddresses.includes(addr)) {
				moneySentToMe += Number(voutd.value)
			}
		}
	}
	
	let amount = (moneySentToMe) - (moneySentFromMe)
	amount /= 1e8
	let type = amount > 0 ? 'Received' : 'Sent'
	amount = capDecimals(amount, 8)
	return {amount, type}
}

function Transactions(props) {
	let {classes, transactions, usedPubAddresses} = props
	
	const orderedTransactions = []
	for (let txid in transactions) {
		orderedTransactions.push([txid, transactions[txid].time])
	}
	orderedTransactions.sort((a, b) => b[1] - a[1])
	
	return <div className={classes.transactionsListContainer}>
		{orderedTransactions.map((orderedTx) => {
			let tx = transactions[orderedTx[0]]
			const {amount, type} = calculateAmount(tx.vin, tx.vout, usedPubAddresses)
			const loadFloData = (props.activeCoin === 'flo' || props.activeCoin === 'flo_testnet') && (!!tx.floData || tx.floData !== '')
			let linkToTxOnExplorer
			let explorer = props.explorerUrls[props.activeCoin]
			if (explorer) {
				let splitted = explorer.split('api')
				if (splitted.length === 2) {
					linkToTxOnExplorer = splitted.join(`tx/${tx.txid}`)
				}
			}
			
			return <div key={tx.txid} className={classes.transactionRow}>
				<div className={classes.txFloDataContainer}>
					<div className={classes.flexRowMiddle}>
						<a href={linkToTxOnExplorer} target="_blank">{tx.txid}</a>
					</div>
					{loadFloData ? (
						<FloDataContainer classes={classes} floData={tx.floData} />
					): (null) }
				</div>
				<div className={classes.txTimeAmountContainer}>
					<div className={classes.transactionDateContainer}>
						{moment.unix(tx.time).format('MMM D, YYYY')}
					</div>
					<div style={{color: amount > 0 ? 'green' : 'red'}}>
						{amount > 0 ? '+' : null }{amount}
					</div>
				</div>
			</div>
		})}
	</div>
}

Transactions.propTypes = {
	classes: PropTypes.object.isRequired,
	transactions: PropTypes.object.isRequired,
	usedPubAddresses: PropTypes.array.isRequired,
}

export default Transactions