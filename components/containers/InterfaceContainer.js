import React, {useEffect, useState, useRef} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {Wallet as _WALLET} from "oip-hdmw";
import _ from 'lodash'
import {setActiveCoin} from '../../redux/actions/Interface/creators'
import {createInitialCoinStates} from '../../redux/actions/Interface/thunks'
import {updateBalances} from '../../redux/actions/HDMW/thunks'
import {initializeExplorerUrls, displayCoin} from '../../redux/actions/Settings/thunks'

import InterfaceWrapper from "../views/wrappers/InterfaceWrapper";
import {clearSendPaymentAsyncState, clearTxAsyncState} from "../../redux/actions/HDMW/creators";

function getNewArrayItems(initArray, newArray) {
	let itemsAdded = []
	for (let newItem of newArray) {
		let match = false
		for (let oldItem of initArray) {
			if (newItem === oldItem) {
				match = true
				break
			}
		}
		if (!match) {
			itemsAdded.push(newItem)
		}
	}
	return itemsAdded
}

function InterfaceContainer(props) {
	const walletRef = useRef(null)
	
	function getWallet() {
		let wallet = walletRef.current;
		if (wallet !== null) {
			return wallet;
		}
		let newWallet = new _WALLET(props.HDMW.mnemonic, {discover: false});
		walletRef.current = newWallet;
		return newWallet;
	}
	
	useEffect(() => {
		getWallet().addTestnetCoins(props.Settings.includeTestnetCoins)
	}, []) //updates are handled in redux thunk
	
	useEffect(() => {
		if (props.Settings.displayCoins.length === 0) {
			for (let coin of Object.keys(getWallet().getCoins())) {
				props.displayCoin(coin)
			}
		}
	}, [])
	
	useEffect(() => {
		if (_.isEmpty(props.Settings.explorerUrls)) {
			props.initializeExplorerUrls(getWallet())
		} else {
			getWallet().setExplorerUrls(props.Settings.explorerUrls)
		}
	}, [props.Settings.explorerUrls])
	
	const [displayArray, updateDisplayArray] = useState([])
	useEffect(() => {
		if (!props.Settings.displayCoins.includes(props.Interface.activeCoin)) {
			if (props.Settings.displayCoins.length > 0) {
				props.setActiveCoin(props.Settings.displayCoins[0])
			}
		}
		
		if (props.Settings.displayCoins.length > displayArray.length) {
			props.createInitialCoinStates(getWallet())
			
			const newItems = getNewArrayItems(displayArray, props.Settings.displayCoins)
			props.updateBalances(getWallet(), newItems)
		}
		
		//keep an internal state of display coins to compare to on re-renders
		updateDisplayArray(props.Settings.displayCoins)
		
	}, [props.Settings.displayCoins])
	
	useEffect(() => {
		props.clearTxAsyncState()
		props.clearSendPaymentAsyncState()
	}, [props.Interface.activeCoin])
	
	return <InterfaceWrapper
		//hdmw
		Wallet={getWallet()}
		//states
		activeCoin={props.Interface.activeCoin}
		displayCoins={props.Settings.displayCoins}
		balances={props.HDMW.balances}
		totalBalance={props.HDMW.totalBalance}
		exchangeRates={props.HDMW.exchangeRates}
		balanceAsyncState={props.HDMW.balanceAsyncState}
		displayBalances={props.Settings.displayBalances}
		//actions
		setActiveCoin={props.setActiveCoin}
		updateBalances={props.updateBalances}
	/>
	
}

const mapDispatchToProps = {
	setActiveCoin,
	updateBalances,
	initializeExplorerUrls,
	createInitialCoinStates,
	displayCoin,
	clearTxAsyncState,
	clearSendPaymentAsyncState
}

const mapStateToProps = (state) => {
	return {
		Interface: state.Interface,
		Settings: state.Settings,
		HDMW: state.HDMW,
	}
}

InterfaceContainer.propTypes = {
	//store
	Interface: PropTypes.object.isRequired,
	Settings: PropTypes.object.isRequired,
	HDMW: PropTypes.object.isRequired,
	//actions
	setActiveCoin: PropTypes.func.isRequired,
	initializeExplorerUrls: PropTypes.func.isRequired,
	createInitialCoinStates: PropTypes.func.isRequired,
	displayCoin: PropTypes.func.isRequired,
	updateBalances: PropTypes.func.isRequired,
	clearTxAsyncState: PropTypes.func.isRequired,
	clearSendPaymentAsyncState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(InterfaceContainer)
