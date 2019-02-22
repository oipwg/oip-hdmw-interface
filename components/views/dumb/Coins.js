import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types';
import {withTheme, withStyles} from '@material-ui/core/styles';

import styles from '../../../styles/views/dumb/Coins'
import capDecimals from '../../../lib/util/capDecimals'

const Coins = (props) => {
	const {classes, coinAsyncState, xrAsyncState} = props
	
	const selectedCoinBorder = (coin) => {
		let border = {
			borderLeft: `1px solid ${props.theme.palette.primary.main}`,
			marginTop: '1 px'
		}
		
		return coin === props.activeCoin ? border : {}
	}
	
	const getBalanceText = (coin) => {
		if (!coinAsyncState[coin])
			return
		let balanceText
		if (coinAsyncState[coin].fetching) {
			balanceText = <span style={{color: 'blue'}}>Balance Fetching</span>
		} else if (coinAsyncState[coin].error) {
			balanceText = <span style={{color: 'red'}}>Balance Error</span>
		} else if (coinAsyncState[coin].success) {
			if (!_.isNumber(props.balances[coin])) {
				return <span style={{color: 'red'}}>Balance Error</span>
			}
			balanceText = <span style={{color: 'green'}}>{capDecimals(props.balances[coin], 8)} {props.networks[coin].ticker}</span>
		} else {
			return null
		}
		return balanceText
	}
	
	const getFiatText = (coin) => {
		if (!xrAsyncState[coin] || coin.includes('_testnet'))
			return
		let fiatText, color
		if (xrAsyncState[coin].fetching) {
			fiatText = 'Fetching Exchange Rate'
			color = 'blue'
		} else if (xrAsyncState[coin].error) {
			fiatText = 'Error fetching exchange rate'
			color = 'red'
		} else if (xrAsyncState[coin].success) {
			if (!_.isNumber(props.balances[coin]) || !_.isNumber(props.exchangeRates[coin])) {
				fiatText = 'Error'
				color = 'red'
			} else {
				fiatText = `$${(props.balances[coin] * props.exchangeRates[coin]).toFixed(2)}`
				color = 'grey'
			}
		} else {
			fiatText = null
		}
		return <span style={{color, marginLeft: '5px'}}>{fiatText}</span>
	}
	
	const coins = Object.keys(props.Wallet.getCoins()).filter(coin => props.displayCoins.includes(coin))
	return <div className={classes.coinsContainer}>
		<div className={classes.coinsList}>
			{coins.map((coin, i) => {
				return (
					<div
						key={i}
						style={selectedCoinBorder(coin)}
						className={classes.coinContainer}
						onClick={(e) => {
							e.preventDefault();
							props.setActiveCoin(coin)
						}}
					>
						<div className={classes.coinInfoWrapper}>
							<h4 className={classes.coinName}>{_.toUpper(coin)}</h4>
							<div className={classes.coinBalanceRCol}>
								{props.displayBalances ? (
										getBalanceText(coin)
									)
									: null}
								{props.displayBalances ? (
										getFiatText(coin)
									)
									: null}
							</div>
						</div>
					</div>
				)
			})}
		</div>
		<div className={classes.cardSpace}/>
		<div className={classes.addCoinCard}>
			{/*<h5*/}
			{/*onClick={() => {actions.setDisplayView('add_coin')}}*/}
			{/*style={{margin: '0px', cursor: 'pointer'}}>ADD COIN</h5>*/}
		</div>
	</div>
}

Coins.propTypes = {
	//styles
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
	//wallet
	Wallet: PropTypes.object.isRequired,
	//state
	activeCoin: PropTypes.string.isRequired,
	displayBalances: PropTypes.bool.isRequired,
	exchangeRates: PropTypes.object.isRequired,
	balances: PropTypes.object.isRequired,
	networks: PropTypes.object.isRequired,
	coinAsyncState: PropTypes.object.isRequired,
	xrAsyncState: PropTypes.object.isRequired,
	//actions
	setActiveCoin: PropTypes.func.isRequired,
}

export default withTheme()(withStyles(styles)(Coins));