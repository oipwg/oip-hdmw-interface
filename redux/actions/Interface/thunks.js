import {setInitialCoinStates} from "./creators";
import {setExplorerUrls, setDefaultExplorerUrls, addDisplayCoin} from "../Settings/creators";

// thunks
export const createInitialCoinStates = (wallet) => (dispatch, getState) => {
	const Interface = getState().Interface
	
	let coinnames = Object.keys(wallet.getCoins())
	let coinObject = {}
	
	for (let coin of coinnames) {
		let match = false
		for (let key in Interface) {
			if (key === coin) {
				match = true
			}
		}
		if (!match) {
			coinObject[coin] = {
				addressCount: 1,
				accountsCount: 1,
				activeAccountIndex: 0,
				activeChainIndex: 0,
				activeAddressIndex: 0,
			}
		}
	}
	
	if (Object.keys(coinObject).length > 0) {
		dispatch(setInitialCoinStates(coinObject))
	}
}

export const createInitialCoinState = coin => (dispatch, getState) => {
	const Interface = getState().Interface
	
	let coinObject = {}
	let match = false
	for (let key in Interface) {
		if (key === coin) {
			match = true
		}
	}
	if (!match) {
		coinObject[coin] = {
			addressCount: 1,
			accountsCount: 1,
			activeAccountIndex: 0,
			activeChainIndex: 0,
			activeAddressIndex: 0,
		}
		dispatch(setInitialCoinStates(coinObject))
	}
}

export const addCoinToRedux = (coin, wallet) => dispatch => {
	dispatch(createInitialCoinState(coin))
	dispatch(addDisplayCoin(coin))
	let networks = wallet.networks
	let coinNetwork = networks[coin]
	if (coinNetwork) {
		if (coinNetwork.explorer) {
			dispatch(setExplorerUrls({[coin]: coinNetwork.explorer.url}))
			dispatch(setDefaultExplorerUrls({[coin]: coinNetwork.explorer.url}))
		}
	}
}