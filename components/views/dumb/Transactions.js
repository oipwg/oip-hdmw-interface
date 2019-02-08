import React from "react";
import PropTypes from 'prop-types'
import moment from 'moment';
import _ from 'lodash'
import FloDataContainer from "./FloDataContainer";

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
	
	return {amount, type}
}

function Transactions(props) {
	console.log("Transactions.render")
	let {classes, transactions, usedPubAddresses} = props
	
	return <div className={classes.transactionsListContainer}>
		{transactions.map(tx => {
			const {amount, type} = calculateAmount(tx.vin, tx.vout, usedPubAddresses)
			return <div key={tx.txid} className={classes.transactionRow}>
				<div className={classes.txFloDataContainer}>
					<div className={classes.flexRowMiddle}>
						{tx.txid}
					</div>
					<FloDataContainer classes={classes} floData={tx.floData} />
				</div>
				<div className={classes.txTimeAmountContainer}>
					<div className={classes.transactionDateContainer}>
						{moment().utc(tx.time).format('MMM D, YYYY')}
					</div>
					<div>
						{_.upperCase(type)}: {amount}
					</div>
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