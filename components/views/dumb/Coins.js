import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types';
import {withTheme, withStyles} from '@material-ui/core/styles';

import styles from '../../../styles/views/dumb/Coins'

const Coins = (props) => {
	const {classes} = props
	
	const selectedCoinBorder = (coin) => {
		let border = {
			borderLeft: `1px solid ${props.theme.palette.primary.main}`,
			marginTop: '1 px'
		}
		
		return coin === props.activeCoin ? border : {}
	}
	
	console.log('Coins.render()')
	const coins = Object.keys(props.Wallet.getCoins()).filter(coin => props.displayCoins.includes(coin))
	return <div className={classes.coinsContainer}>
		<div className={classes.coinsList}>
			{coins.map((coin, i) => {
				
				//toDo: add real error handling
				let balance = props.balances[coin]
				if (!_.isNumber(balance)) {
					balance = 'error'
				}
				let ticker = props.networks[coin].ticker
				let fiat = balance * props.exchangeRates[coin]
				if (!_.isNumber(props.exchangeRates[coin])) {
					fiat = 'error'
				}
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
							{props.displayBalances ? (
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
	//actions
	setActiveCoin: PropTypes.func.isRequired,
}

export default withTheme()(withStyles(styles)(Coins));