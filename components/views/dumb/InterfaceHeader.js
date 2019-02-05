import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import {Refresh} from "@material-ui/icons";
import {withStyles} from "@material-ui/core";

import styles from '../../../styles/views/dumb/InterfaceHeader'

const calculateFiatBalance = (balances, exchangeRates) => {
	let totalBalance = 0
	for (let coinB in balances) {
		if (coinB.includes('_testnet'))
			continue
		for (let coinX in exchangeRates) {
			if (coinB === coinX) {
				if (_.isNumber(balances[coinB]) && _.isNumber(exchangeRates[coinB])) {
					totalBalance += (balances[coinB]) * exchangeRates[coinB]
				} else {
					return 'error'
				}
			}
		}
	}
	return totalBalance
}

function InterfaceHeader({exchangeRates, balances, classes, updateBalances, Wallet, displayCoins}) {
	return <div className={classes.interfaceHeader}>
		<div className={classes.balanceContainer}>
			<h4 style={{margin: '0px'}}>
				<span>Balance: </span>
				<span>${calculateFiatBalance(balances, exchangeRates)}</span>
			</h4>
		</div>
		
		<Refresh
			onClick={() => {
				updateBalances(Wallet, displayCoins)
			}}
			className={classes.refreshBalanceIcon}
		/>
	</div>
}

InterfaceHeader.propTypes = {
	Wallet: PropTypes.object.isRequired,
	balances: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	exchangeRates: PropTypes.object.isRequired,
	displayCoins: PropTypes.array.isRequired,
	updateBalances: PropTypes.func.isRequired,
}

export default withStyles(styles)(InterfaceHeader)
