import {loadFromLocalStorage, setCoinNetworkApis, setDefaultCoinNetworkApis, includeTestnetCoins, testnetAdded} from "./creators";
import {addDisplayCoin, removeDisplayCoin} from '../Interface/creators'
import {addCoinToRedux} from "../Interface/thunks";

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

export const initializeCoinNetworkApiUrls = (wallet) => dispatch => {
	let networks = wallet.getNetworkApiUrls()
	dispatch(setCoinNetworkApis(networks))
	dispatch(setDefaultCoinNetworkApis(networks))
}

export const loadSettingsFromLocalStorage = () => dispatch => {
	let parsedSettings
	if (window && window.localStorage) {
		try {
			let hdmw_settings = localStorage.getItem('hdmw_settings')
			parsedSettings = JSON.parse(hdmw_settings)
		} catch (err) {
			return false
		}
 	}
	dispatch(loadFromLocalStorage(parsedSettings))
}