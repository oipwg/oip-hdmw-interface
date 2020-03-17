import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import {Refresh, Warning} from "@material-ui/icons";
import {withStyles} from "@material-ui/core";

import styles from '../../../styles/views/dumb/InterfaceHeader'

const calculateFiatBalance = (balances, exchangeRates) => {
	let balance = 0, errors = []
	for (let coinB in balances) {
		if (coinB.endsWith('Testnet'))
			continue
		for (let coinX in exchangeRates) {
			if (coinB === coinX) {
				if (_.isNumber(balances[coinB]) && _.isNumber(exchangeRates[coinB])) {
					balance += (balances[coinB]) * exchangeRates[coinB]
				} else {
					errors.push(coinB)
				}
			}
		}
	}
	return {balance, errors}
}

function InterfaceHeader({balanceAsyncState, exchangeRates, balances, classes, updateBalances, Wallet, displayCoins}) {
	
	const {balance, errors} = calculateFiatBalance(balances, exchangeRates)
	
	const getDisplayText = () => {
		let balanceText, balanceColor
		if (balanceAsyncState.fetching) {
			balanceText = 'LOADING'
			balanceColor = 'blue'
		} else if (balanceAsyncState.error) {
			balanceText = 'ERROR'
			balanceColor = 'red'
		} else {
			balanceText = `$${balance.toFixed(2)}`
			balanceColor = 'green'
		}
		return {balanceText, balanceColor}
	}
	
	const {balanceText, balanceColor} = getDisplayText()
	
	return <div className={classes.interfaceHeader}>
		<div className={classes.balanceContainer}>
			<h4 style={{margin: '0px'}}>
				<span>Balance: </span>
			</h4>
			<div className={classes.balanceData}>
				<span style={{color: balanceColor}} className={classes.balanceDisplayText}>{balanceText}</span>
				{errors.map((message, i ) => {
					return <div key={i} className={classes.tooltip}> <Warning color={'error'} fontSize={'small'} />
						<span className={classes.tooltiptext}>Failed to fetch balance for: {message}</span>
					</div>
				})}
			</div>
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
