import {loadSettings, setExplorerUrls, setDefaultExplorerUrls, includeTestnetCoins, testnetAdded, addDisplayCoin, removeDisplayCoin} from "./creators";
import {addCoinToRedux} from "../Interface/thunks";
import {loadInterface} from "../Interface/creators";

export const toggleTestnetCoins = (bool, wallet) => (dispatch, getState) => {
	dispatch(includeTestnetCoins(bool))
	if (bool) {
		wallet.addTestnetCoins(bool) //add testnet coins
		//if coins haven't been previously added
		let coins = Object.keys(wallet.getCoins())
		if (!getState().Settings.testnetAdded) {
			for (let coin of coins) {
				if (coin.includes('_testnet')) {
					dispatch(addCoinToRedux(coin, wallet)) //add to display
				}
			}
			dispatch(testnetAdded())
		} else {
			for (let coin of coins) {
				if (coin.includes('_testnet')) {
					dispatch(addDisplayCoin(coin)) //add to display
				}
			}
		}
	} else {
		let coins = Object.keys(wallet.getCoins())
		for (let coin of coins) {
			if (coin.includes('_testnet')) {
				dispatch(displayCoin(coin, false))
			}
		}
		wallet.addTestnetCoins(bool) //remove testnet coins
	}
}

export const displayCoin = (coin, bool = true) => dispatch => {
	if (bool) {
		dispatch(addDisplayCoin(coin))
	} else {
		dispatch(removeDisplayCoin(coin))
	}
}

export const initializeExplorerUrls = (wallet) => dispatch => {
	let networks = wallet.getExplorerUrls()
	dispatch(setExplorerUrls(networks))
	dispatch(setDefaultExplorerUrls(networks))
}

export const initialLoad = () => dispatch => {
	if (process.browser) {
		let settings
		try {
			settings = localStorage.getItem('settings')
		} catch (err) {
			return false
		}
		if (settings) {
			let parsedSettings
			parsedSettings = JSON.parse(settings)
			dispatch(loadSettings(parsedSettings))
		}
		
		let interface_settings
		try {
			interface_settings = localStorage.getItem('interface')
		} catch (err) {
			return false
		}
		
		if (interface_settings) {
			let parsedInterfaceSettings = JSON.parse(interface_settings)
			dispatch(loadInterface(parsedInterfaceSettings))
		}
 	}
}