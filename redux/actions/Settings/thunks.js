import {loadFromLocalStorage, setCoinNetworkApis, setDefaultCoinNetworkApis} from "./creators";
import {addDisplayCoin, removeDisplayCoin} from '../Interface/creators'

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