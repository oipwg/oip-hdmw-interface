import React from "react";
import PropTypes from 'prop-types'
import moment from 'moment';

const calculateAmount = (vin, vout, usedPubAddresses) => {
	let vinData = []
	for (let vi of vin) {
		vinData.push({address: vi.addr, value: vi.value})
	}
	
	let voutData = []
	for (let vo of vout) {
		const value = vo.value
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
			moneySentFromMe += Number(vind.value)
		}
	}
	
	let moneySentToMe = 0
	for (let voutd of voutData) {
		for (let addr of voutd.addresses) {
			if (usedPubAddresses.includes(addr)) {
				moneySentToMe += Number(voutd.value)
				break
			}
		}
	}
	
	console.log('totals: ', moneySentFromMe, moneySentToMe)
	let amount = moneySentToMe - moneySentFromMe
	let type = amount > 0 ? 'Received' : 'Sent'
	
	return {amount, type}
}

function Transactions(props) {
	console.log("Transactions.render")
	const {classes} = props
	
	return <div className={classes.transactionsListContainer}>
		{props.transactions.map(tx => {
			const {amount, type} = calculateAmount(tx.vin, tx.vout, props.usedPubAddresses)
			return <div key={tx.txid} className={classes.transactionRow}>
				<div>{tx.txid}</div>
				
				<div className={classes.transactionDateContainer}>
					{moment().utc(tx.txid).format('MMM D, YYYY')}
				</div>
				
				<div>{tx.floData}</div>
				
				<div>
					{type}:{amount}
				</div>
			</div>
		})}
	</div>
}

Transactions.propTypes = {
	classes: PropTypes.object.isRequired,
	transactions: PropTypes.array.isRequired,
	usedPubAddresses: PropTypes.array.isRequired,
}

export default Transactions