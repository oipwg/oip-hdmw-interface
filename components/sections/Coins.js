import React from 'react'
import _ from 'lodash'
import {withTheme} from '@material-ui/core/styles';

const Coins = (props) => {
	// console.log('Coins()')
	const {classes, Interface, actions, theme, Settings} = props
	
	if (Settings.showTestnetCoins) {
		Interface.wallet.addTestnetCoins()
	} else {Interface.wallet.removeTestnetCoins()}
	
	const selectedCoinBorder = (coin) => {
		let border = {
			borderLeft: `1px solid ${theme.palette.primary.main}`,
			marginTop: '1 px'
		}
		
		return coin === Interface.activeCoinName ? border: {}
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
							<h4 >{_.toUpper(coin)}</h4>
						</div>
					)
				})}
			</div>
			<div className={classes.cardSpace}/>
			<div className={classes.addCoinCard}>
				<h5
					onClick={() => {actions.setDisplayView('add_coin')}}
					style={{margin: '0px', cursor: 'pointer'}}>ADD COIN</h5>
			</div>
		</div>
	</div>
}

export default withTheme()(Coins);
