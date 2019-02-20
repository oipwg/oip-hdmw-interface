import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import TransactionsWrapper from '../views/wrappers/TransactionsWrapper'
import {getTransactions, updateBalances} from "../../redux/actions/HDMW/thunks";
import notifier from "../../lib/notifier";

function TransactionsContainer(props) {
	const {activeCoin, coinState, HDMW, Wallet} = props
	const transactions = HDMW[`txs_${activeCoin}_${coinState.activeAccountIndex}`] || {}
	const pubAddresses = HDMW[`upa_${activeCoin}_${coinState.activeAccountIndex}`] || []
	
	//transactions via props
	//on mount fetch tx and on coin change
	const [txs, setTxs] = useState([])
	
	useEffect(() => {
		console.log('using effect to get transactions')
		getTransactions(props.Wallet)
	}, [props.activeCoin])
	
	
	async function getTransactions(Wallet) {
		const transactions = await props.getTransactions(Wallet, Wallet.getNetworks()[activeCoin].explorer)
		if (transactions) {
			if (Object.keys(transactions).length === txs.length) {
				notifier('No new transactions found')
			} else {
				setTxs(Object.keys(transactions))
				if (!activeCoin.includes('_testnet')) {
					props.updateBalances(Wallet, activeCoin)
				}
 			}
		}
	}
	
	console.log("TransactionsContainer.render")
	return <TransactionsWrapper
		activeCoin={activeCoin}
		coinState={coinState}
		Wallet={Wallet}
		transactions={transactions}
		usedPubAddresses={pubAddresses}
		refreshTransactions={() => getTransactions(props.Wallet)}
		transactionAsyncState={HDMW.transactionAsyncState}
	/>
}

const mapDispatchToProps = {
	getTransactions,
	updateBalances,
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
	updateBalances: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer)