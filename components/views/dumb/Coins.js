import React from 'react'
import _ from 'lodash'
import {withTheme, withStyles} from '@material-ui/core/styles';

import styles from '../../../styles/views/dumb/Coins'

const Coins = (props) => {
	const {
		classes,
		activeCoin,
		setActiveCoin,
		theme,
		displayCoins,
		balances,
		exchangeRates,
		displayBalances,
		networks,
		Wallet,
	} = props
	
	const selectedCoinBorder = (coin) => {
		let border = {
			borderLeft: `1px solid ${theme.palette.primary.main}`,
			marginTop: '1 px'
		}
		
		return coin === activeCoin ? border : {}
	}
	
	console.log('Coins.render()')
	let coins = Object.keys(Wallet.getCoins()).filter(coin => displayCoins.includes(coin))
	return <div className={classes.coinsContainer}>
		
		<div className={classes.coinsList}>
			{coins.map((coin, i) => {
				
				let balance = balances[coin]
				if (!_.isNumber(balance)) {
					balance = 'error'
				}
				let ticker = networks[coin].ticker
				let fiat = balance * exchangeRates[coin]
				if (!_.isNumber(exchangeRates[coin])) {
					fiat = 'error'
				}
				//toDo: add real error handling
				return (
					<div
						key={i}
						style={selectedCoinBorder(coin)}
						className={classes.coinContainer}
						onClick={(e) => {
							e.preventDefault();
							setActiveCoin(coin)
						}}
					>
						<div className={classes.coinInfoWrapper}>
							<h4 className={classes.coinName}>{_.toUpper(coin)}</h4>
							{displayBalances ? (
									<span>{balance} {ticker} ~= ${fiat}</span>
								)
								: null}
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

export default withTheme()(withStyles(styles)(Coins));