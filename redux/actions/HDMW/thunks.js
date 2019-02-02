import {setCoinBalance, setCoinBalances, setExchangeRates} from "./creators";

export const updateCoinBalance = (coin, wallet, force = false) => async (dispatch, getState) => {
	if (dispatch(shouldUpdate(coin)) || force) {
		let balance = await wallet.getCoinBalances({coins: [coin]})
		dispatch(setCoinBalance(coin, balance))
	}
}

export const updateExchangeRates = (wallet, coins) => async dispatch => {
	if (dispatch(shouldUpdate('xr'))) {
		let options = {}
		if (coins)
			options.coins = coins
		let xr = await wallet.getExchangeRates(options)
		dispatch(setExchangeRates(xr))
	}
}

export const updateBalances = (wallet, coins) => async (dispatch) => {
	let _coins = coins ? coins : Object.keys(wallet.getCoins())
	if (typeof _coins === 'string') {
		_coins = [_coins]
	}
	let coinsToFetchBalances = []
	for (let coin of _coins) {
		if (dispatch(shouldUpdate(coin))) {
			coinsToFetchBalances.push(coin)
		}
	}
	let balances = await wallet.getCoinBalances({coins: coinsToFetchBalances})
	dispatch(setCoinBalances(balances))
	
	dispatch(updateExchangeRates(wallet, _coins)) // toDo: move into new func?
}

export const shouldUpdate = name => (undefined, getState) => {
	const {Settings, HDMW} = getState()
	if (!HDMW.lastUpdate[name]) {
		return true
	}
	return (Date.now() - Settings.refreshLimit) >= HDMW.lastUpdate[name];
}
