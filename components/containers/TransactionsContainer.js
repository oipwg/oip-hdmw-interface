import React, {useEffect} from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import TransactionsWrapper from '../views/wrappers/TransactionsWrapper'
import {getTransactions} from "../../redux/actions/HDMW/thunks";

function TransactionsContainer(props) {
	const {activeCoin, coinState, HDMW, Wallet} = props
	
	useEffect(() => {
		getTransactions(props.Wallet)
	}, [props.activeCoin])
	
	function getExplorer() {
		return Wallet.getNetworks()[activeCoin].explorer
	}
	
	function getTransactions(Wallet) {
		props.getTransactions(Wallet, getExplorer())
	}
	
	console.log("TransactionsContainer.render")
	return <TransactionsWrapper
		activeCoin={activeCoin}
		coinState={coinState}
		Wallet={Wallet}
		transactions={HDMW[`txs_${activeCoin}_${coinState.activeAccountIndex}`] || []}
		usedPubAddresses={HDMW[`upa_${activeCoin}_${coinState.activeAccountIndex}`] || []}
		refreshTransactions={() => getTransactions(Wallet)}
	/>
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