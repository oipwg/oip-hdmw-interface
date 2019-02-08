import React from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import TransactionsWrapper from '../views/wrappers/TransactionsWrapper'
import {getTransactions} from "../../redux/actions/HDMW/thunks";

class TransactionsContainer extends React.Component {
	constructor(props) {
		super(props)
		console.log("TransactionsContainer.constructor")
		
		this.state = {
			explorer: undefined
		}
	}
	
	async componentDidMount() {
		console.log("Transactions.componentDidMount")
		this.getTransactions(this.props.Wallet, this.props.activeCoin)
	}
	
	async componentDidUpdate(prevProps, prevState) {
		console.log("TransactionsContainer.componentDidUpdate")
		if (prevProps.activeCoin !== this.props.activeCoin) {
			this.getTransactions(this.props.Wallet, this.props.activeCoin)
		}
	}
	
	getTransactions = (Wallet, activeCoin) => {
		this.setState({
			explorer: Wallet.getNetworks()[activeCoin].explorer
		}, () => this.props.getTransactions(this.props.Wallet, this.state.explorer))
	}
	
	render() {
		console.log("TransactionsContainer.render")
		const {activeCoin, coinState, HDMW, Wallet} = this.props
		
		return <TransactionsWrapper
			activeCoin={activeCoin}
			coinState={coinState}
			Wallet={Wallet}
			transactions={HDMW[`txs_${activeCoin}_${coinState.activeAccountIndex}`] || []}
			usedPubAddresses={HDMW[`upa_${activeCoin}_${coinState.activeAccountIndex}`] || []}
			refreshTransactions={() => this.getTransactions(Wallet, activeCoin)}
		/>
	}
}

const mapDispatchToProps = {
	getTransactions,
}

const mapStateToProps = (state) => {
	return {
		activeCoin: state.Interface.activeCoin,
		coinState: state.Interface.coins[state.Interface.activeCoin],
		HDMW: state.HDMW,
		Interface: state.Interface,
	}
}

TransactionsContainer.propTypes = {
	Wallet: PropTypes.object.isRequired,
	activeCoin: PropTypes.string.isRequired,
	coinState: PropTypes.object.isRequired,
	getTransactions: PropTypes.func.isRequired,
	HDMW: PropTypes.object.isRequired,
	Interface: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer)