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
		if (Object.keys(transactions).length === 0) {
			getTransactions(props.Wallet)
		}
	}, [props.activeCoin])


	const getTransactions = async (Wallet) => {
		const transactions = await props.getTransactions(Wallet, Wallet.getNetworks()[activeCoin].explorer)
		if (transactions) {
			if (Object.keys(transactions).length === txs.length) {
				notifier('No new transactions found')
			} else {
				setTxs(Object.keys(transactions))
				if (!activeCoin.endsWith('Testnet')) {
					props.updateBalances(Wallet, activeCoin)
				}
 			}
		}
	}

	return <TransactionsWrapper
		activeCoin={activeCoin}
		coinState={coinState}
		Wallet={Wallet}
		transactions={transactions}
		usedPubAddresses={pubAddresses}
		refreshTransactions={() => getTransactions(props.Wallet)}
		transactionAsyncState={HDMW.transactionAsyncState}
		explorerUrls={props.explorerUrls}
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
		explorerUrls: state.Settings.explorerUrls
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
	explorerUrls: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer)
