import React, {useEffect, useState} from 'react'
import _ from 'lodash'
import {withTheme} from '@material-ui/core/styles';

const Coins = (props) => {
	const {classes, HDMW, Wallet, Interface, actions, Settings, theme} = props
	
	// noinspection JSUnresolvedFunction
	Wallet.addTestnetCoins(Settings.toggleTestnetCoins)
	
	const selectedCoinBorder = (coin) => {
		let border = {
			borderLeft: `1px solid ${theme.palette.primary.main}`,
			marginTop: '1 px'
		}
		
		return coin === Interface.activeCoinName ? border : {}
	}
	
	const getCoinInformation = (coin) => {
		const {balances, exchangeRates} = HDMW
		if (!balances || !exchangeRates) {
			return null
		}
		let coinTicker = Wallet.networks[coin].ticker
		
		let balance = balances[coin]
		let xr = exchangeRates[coin]
		
		let fiat
		if (_.isNumber(balance) && _.isNumber(xr)) {
			fiat = balance * xr
		} else {
			fiat = 'error'
		}
		let balanceInformation
		if (coin.includes('_testnet')) {
			balanceInformation = `${balance} ${coinTicker}`
		} else {
			balanceInformation = `${balance} ${coinTicker} = ${fiat} USD`
		}
		
		if (!_.isNumber(balance)) {
			balanceInformation = 'error'
		}
		if (!balance && balance !== 0) {
			balanceInformation = 'loading'
		}
		
		return <span className={classes.balanceInformation}>{balanceInformation}</span>
		
	}
	
	const [isShowingTestnetCoins, toggleTNC] = useState(false)
	useEffect(() => {
		if (isShowingTestnetCoins !== Settings.toggleTestnetCoins) {
			toggleTNC(Settings.toggleTestnetCoins)
			if (Settings.toggleTestnetCoins) {
				actions.updateBalances(Wallet)
			}
		}
	})
	
	return <div className={classes.coinWrapper}>
		<div className={classes.coinScrollContainer}>
			<div className={classes.coinList}>
				{Object.keys(Wallet.getCoins()).map((coin, i) => {
					return (
						<div
							key={i}
							style={selectedCoinBorder(coin)}
							className={classes.coinContainer}
							onClick={(e) => {
								e.preventDefault();
								actions.setActiveCoin(coin)
							}}
						>
							<div className={classes.coinInfoWrapper}>
								<h4 className={classes.coinName}>{_.toUpper(coin)}</h4>
								{getCoinInformation(coin)}
							</div>
						</div>
					)
				})}
				{/*{updateCoinBalances()}*/}
			</div>
			<div className={classes.cardSpace}/>
			<div className={classes.addCoinCard}>
				{/*<h5*/}
				{/*onClick={() => {actions.setDisplayView('add_coin')}}*/}
				{/*style={{margin: '0px', cursor: 'pointer'}}>ADD COIN</h5>*/}
			</div>
		</div>
	</div>
}

export default withTheme()(Coins);
