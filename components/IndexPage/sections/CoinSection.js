import React from 'react'
import _ from 'lodash'
import {withTheme} from '@material-ui/core/styles';

const CoinSection = (props) => {
	const {classes, wallet, state, fn, theme} = props
	
	const selectedCoinBorder = (coin) => {
		let border = {
			borderLeft: `1px solid ${theme.palette.secondary.main}`,
			marginTop: '1 px'
		}
		
		return  coin === state.activeCoinName ? border: {}
	}
	return <div className={classes.coinWrapper}>
		<div className={classes.coinList}>
			{Object.keys(wallet.getCoins()).map((coin, i) => {
				return (
					<div
						key={i}
						style={selectedCoinBorder(coin)}
						className={classes.coinContainer}
						onClick={(e) => {
							e.preventDefault();
							fn.handleCoinCardClick(coin)
						}}
					>
						<h4 >{_.toUpper(coin)}</h4>
					</div>
				)
			})}
			<div className={classes.cardSpace}/>
			<div className={classes.addCoinCard}>
				<h5 style={{margin: '0px'}}>ADD COIN</h5>
			</div>
		</div>
	</div>
}

export default withTheme()(CoinSection);
