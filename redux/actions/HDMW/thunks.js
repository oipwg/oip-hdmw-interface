import {setBalances, setExchangeRates, setFiatBalances, setLastRefresh} from "./creators";

export const fetchAndSetBalances = (wallet) => async (dispatch) => {
	const balances = await wallet.getCoinBalances()
	dispatch(setBalances(balances))
}

export const fetchAndSetExchangeRates = (wallet) => async (dispatch) => {
	let coins = Object.keys(wallet.getCoins())

	let xr = await wallet.getExchangeRates({coins})
	
	// set the testnet coin rates to the mainnet coin rates
	for (let coin of Object.keys(wallet.getCoins())) {
		if (coin.includes('_testnet')) {
			let coinSplit = coin.split('_')
			xr[coin] = xr[coinSplit[0]]
		}
	}
	dispatch(setExchangeRates(xr))
}

export const updateBalances = (wallet) => async (dispatch) => {
	const balances = await wallet.getCoinBalances()
	let xr = await wallet.getExchangeRates()
	
	// set the testnet coin rates to the mainnet coin rates
	for (let coin of Object.keys(wallet.getCoins())) {
		if (coin.includes('_testnet')) {
			let coinSplit = coin.split('_')
			xr[coin] = xr[coinSplit[0]]
		}
	}
	
	let fiatBalances = {}
	for (let coinB in balances) {
		for (let coinX in xr) {
			if (coinB === coinX) {
				if (typeof balances[coinB] === 'number' && typeof xr[coinX] === 'number') {
					fiatBalances[coinB] = balances[coinB] * xr[coinX]
				} else {fiatBalances[coinB] = 'error'}
			}
		}
	}

	dispatch(setBalances(balances))
	dispatch(setExchangeRates(xr))
	dispatch(setFiatBalances(fiatBalances))
	dispatch(setLastRefresh(Date.now()))
}

export const shouldRefresh = (force) => (dispatch, getState) => {
	const {lastRefresh, refreshLimit} = getState().HDMW
	if (force) {
		return true
	}
	return (Date.now() - refreshLimit) >= lastRefresh;
}