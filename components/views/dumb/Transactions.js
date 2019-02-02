import React from "react";
import {withStyles} from "@material-ui/core";
import moment from 'moment';

import styles from '../../../styles/views/dumb/Transactions'

class Transactions extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			status: {error: false, message: ''},
			usedAddresses: [],
			txs: [],
		}
		this.explorer = props.Wallet.networks[props.Interface.activeCoinName].explorer
	}
	
	componentDidMount() {
		const {Interface, Wallet} = this.props

		let coin = Wallet.getCoin(Interface.activeCoinName)
		let account = coin.getAccount(Interface[Interface.activeCoinName].account)
		let usedAddresses = account.getUsedAddresses(Interface[Interface.activeCoinName].chain)
		let publicAddresses = []
		for (let addr of usedAddresses) {
			publicAddresses.push(addr.getPublicAddress())
		}
		let txs = []
		for (let addr of publicAddresses) {
			this.explorer.getTransactionsForAddress(addr).then(tx => {
					let _txs = tx.txs
					for (let tx of _txs) {
						txs.push(tx)
					}
				}
			).catch(err => console.error('err', err))
		}
		this.setState({txs, usedAddresses})
	}
	
	renderTransactions() {
		if (this.state.txs.length === 0) {
			return <div className={this.props.classes.noTransactionsFound}>
				<h2 style={{position: 'absolute', top: '40%'}}>No Transactions Found</h2>
			</div>
		}
		return <div>This needs to get built</div>
		// return <div className={this.props.classes.transactionRowContainer}>
		// 	{this.state.txs.map((tx, i) => {
		// 		// console.log('mapping tx', tx)
		// 		return <div className={this.props.classes.transactionRow} key={i}>
		// 			{moment.unix(1548364481).utc()}
		// 		</div>
		// 	})}
		// </div>
	}
	
	render() {
		const {classes} = this.props
		return (
			<div className={classes.transactionsContainer}>
				{this.renderTransactions()}
			</div>
		)
	}
}

export default withStyles(Transactions)