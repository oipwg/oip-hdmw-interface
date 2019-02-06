import React from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import TransactionsWrapper from '../views/wrappers/TransactionsWrapper'

class TransactionsContainer extends React.Component {
	constructor(props) {
		super(props)
		console.log("TransactionsContainer.constructor")
		
		this.state = {
			transactions: [],
			transactionIds: [],
			usedAddresses: [],
		}
	}
	
	async componentDidMount() {
		console.log("Transactions.componentDidMount")
		this.setExplorer(this.props.Wallet, this.props.activeCoin)
		await this.setUsedAddresses(this.props.Wallet, this.props.activeCoin, this.props.coinState)
	}
	
	async componentDidUpdate(prevProps, prevState) {
		console.log("TransactionsContainer.componentDidUpdate")
		if (prevProps.activeCoin !== this.props.activeCoin) {
			this.setExplorer(this.props.Wallet, this.props.activeCoin)
			await this.setUsedAddresses(this.props.Wallet, this.props.activeCoin, this.props.coinState)
		}
	}
	
	setTransactionIds(addresses) {
		let transactionIds = []
		for (let addr of addresses) {
			for (let tx of addr.transactions) {
				transactionIds.push(tx)
			}
		}
		this.setState({transactionIds}, async () => {
			await this.setTransactions(this.state.transactionIds)
		})
	}
	
	async setTransactions(transactionIds) {
		let transactions = []
		for (let id of transactionIds) {
			transactions.push(await this.state.explorer.getTransaction(id))
		}
		this.setState({transactions})
	}
	
	setUsedAddresses = async (Wallet, activeCoin, coinState) => {
		let COIN = Wallet.getCoin(activeCoin)
		if (!COIN) {
			console.error(Wallet)
			return
		}
		let ACCOUNT = COIN.getAccount(coinState.activeAccountIndex)
		ACCOUNT = await ACCOUNT.discoverChains()
		
		let usedAddresses
		try {
			usedAddresses = await ACCOUNT.getUsedAddresses()
		} catch (err) {
			throw new Error(`Failed to get addresses: ${JSON.stringify(err)}`)
		}
		this.setState({usedAddresses}, () => {
			this.setTransactionIds(this.state.usedAddresses)
		})
	}
	
	setExplorer = (Wallet, activeCoin) => {
		this.setState({
			explorer: Wallet.getNetworks()[activeCoin].explorer
		})
	}
	
	render() {
		console.log("TransactionsContainer.render")
		return <TransactionsWrapper
			activeCoin={this.props.activeCoin}
			coinState={this.props.coinState}
			Wallet={this.props.Wallet}
			transactions={this.state.transactions}
			usedPubAddresses={this.state.usedAddresses.map(addr => addr.getPublicAddress())}
		/>
	}
}

const mapDispatchToProps = {

}

const mapStateToProps = (state) => {
	return {
		activeCoin: state.Interface.activeCoin,
		coinState: state.Interface.coins[state.Interface.activeCoin]
	}
}

TransactionsContainer.propTypes = {
	Wallet: PropTypes.object.isRequired,
	activeCoin: PropTypes.string.isRequired,
	coinState: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer)