import React from 'react'
import _ from 'lodash'
import {withTheme} from '@material-ui/core/styles';

const Coins = (props) => {
	// console.log('Coins()')
	const {classes, Interface, actions, theme} = props
	
	// if (Settings.showTestnetCoins) {
	// 	Interface.wallet.addTestnetCoins()
	// } else {Interface.wallet.removeTestnetCoins()}
	
	const selectedCoinBorder = (coin) => {
		let border = {
			borderLeft: `1px solid ${theme.palette.primary.main}`,
			marginTop: '1 px'
		}
		
		return coin === Interface.activeCoinName ? border: {}
	}
	
	const getCoinInformation = (coin) => {
		const {balances, exchangeRates} = Interface
		if (!balances || !exchangeRates) {
			return null
		}
		let coinTicker = Interface.wallet.networks[coin].ticker
		
		let balance = balances[coin]
		let xr = exchangeRates[coin]
		
		let fiat
		if (_.isNumber(balance) && _.isNumber(xr)) {
			fiat = balance * xr
		} else {fiat = 'error'}
		
		let balanceInformation = `${balance} ${coinTicker} = ${fiat} USD`
		
		if (!_.isNumber(balance)) {
			balanceInformation = 'error'
		}
		if (!balance && balance !== 0) {
			balanceInformation = 'loading'
		}
		
		return  <span className={classes.balanceInformation}>{balanceInformation}</span>
		
	}
	
	return <div className={classes.coinWrapper}>
		<div className={classes.coinScrollContainer}>
			<div className={classes.coinList}>
				{Object.keys(Interface.wallet.getCoins()).map((coin, i) => {
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
