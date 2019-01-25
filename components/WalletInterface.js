import React from "react";
import Paper from '@material-ui/core/Paper'
import {Refresh} from '@material-ui/icons'

import RenderCoinSection from './sections/Coins'
import RenderDisplayView from './sections/DisplayView'

class WalletInterface extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			detailsSearchValue: '',
		}
	}

	render() {
		// console.log('WalletInterface.render')
		const {classes, actions, Interface} = this.props;
		
		let balances
		let balanceColorStyle = {color: 'black'}
		
		if (Interface.balances) {
			balances = 0
			for (let coin in Interface.balances) {
				if (typeof Interface.balances[coin] === 'number') {
					balances += Interface.balances[coin]
				} else {
					balances = 'Error'
					balanceColorStyle.color = 'red'
					break;
				}
				balanceColorStyle.color = 'green'
			}
		}
		
		let displayBalances = balances === undefined ? '...loading' : `$${balances}`
	
		return (
			<div className={classes.walletContainer}>
				<div className={classes.contentLayout}>
					<Paper elevation={1} className={classes.paperLayout}>
						<div className={classes.walletHeader}>
							<div className={classes.balanceContainer}>
								<h4 style={{margin: '0px'}}>
									<span style={balanceColorStyle}>Balance: {displayBalances}</span>
								</h4>
							</div>
							
							<Refresh
								onClick={() => {actions.fetchAndSetBalances()}}
								className={classes.refreshBalanceIcon}
							/>
						</div>
						<div className={classes.sectionWrapper}>
							<RenderCoinSection {...this.props} />
							{RenderDisplayView(this.props)}
						</div>
					</Paper>
				</div>
			</div>
		)
	}
}

export default WalletInterface