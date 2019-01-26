import React from "react";
import Paper from '@material-ui/core/Paper'
import {Refresh} from '@material-ui/icons'

import RenderCoinSection from './sections/Coins'
import RenderDisplayView from './sections/DisplayView'

const loading = '...loading',
	error = 'error',
	normal = 'normal'

class WalletInterface extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			detailsSearchValue: '',
			balanceState: loading,
		}
	}
	
	handleRefresh = () => {
		this.props.actions.updateBalances(this.props.Wallet)
	}
	
	//toDo: THIS NEEDS TO GRAB FIAT BALANCES NOT CRYPTO BALANCES
	getBalance = () => {
		const {HDMW} = this.props
		if (!HDMW.fiatBalances) {
			return loading
		}
	
		let total = 0
		for (let coin in HDMW.fiatBalances) {
			if (coin.includes('_testnet')) {
				break
			}
			if (typeof HDMW.fiatBalances[coin] !== 'number') {
				return error
			}
			total += HDMW.fiatBalances[coin]
		}
		
		return total
	}
	
	getBalanceColorStyle = () => {
		switch (this.getBalance()) {
			case loading:
				return {color: 'grey'}
			case error:
				return {color: 'red'}
			default:
				return {color: 'blue'}
		}
	}
	
	render() {
		// console.log('WalletInterface.render')
		const {classes} = this.props;
	
		return (
			<div className={classes.walletContainer}>
				<div className={classes.contentLayout}>
					<Paper elevation={1} className={classes.paperLayout}>
						<div className={classes.walletHeader}>
							<div className={classes.balanceContainer}>
								<h4 style={{margin: '0px'}}>
									<span className={classes.balanceTag}>Balance: </span>
									<span style={this.getBalanceColorStyle()}>${this.getBalance()}</span>
								</h4>
							</div>
							
							<Refresh
								onClick={() => {
									this.handleRefresh()
								}}
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