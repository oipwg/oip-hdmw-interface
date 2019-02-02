import {addDisplayCoin, removeDisplayCoin, loadFromLocalStorage, toggleTestnetCoins} from "./creators";

export const displayCoin = (coin, bool = true) => dispatch => {
	if (bool) {
		dispatch(addDisplayCoin(coin))
	} else {
		dispatch(removeDisplayCoin(coin))
	}
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