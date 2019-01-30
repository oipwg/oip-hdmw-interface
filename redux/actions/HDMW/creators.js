export const SET_MNEMONIC = 'SET_MNEMONIC'
export const setMnemonic = (mnemonic) => ({
	type: SET_MNEMONIC,
	mnemonic
})

export const SET_DISCOVER = 'SET_DISCOVER'
export const setDiscover = (discover) => ({
	type: SET_DISCOVER,
	discover
})

export const SET_BALANCES = 'SET_BALANCES'
export const setBalances = (balances) => ({
	type: SET_BALANCES,
	balances
})

export const SET_FIAT_BALANCES = 'SET_FIAT_BALANCES'
export const setFiatBalances= (fiatBalances) => ({
	type: SET_FIAT_BALANCES,
	fiatBalances
})

export const SET_EXCHANGE_RATES = 'SET_EXCHANGE_RATES'
export const setExchangeRates = (xr) => ({
	type: SET_EXCHANGE_RATES,
	xr
})

export const SET_LAST_REFRESH = 'SET_LAST_REFRESH'
export const setLastRefresh = (refreshTimestamp) => ({
	type: SET_LAST_REFRESH,
	refreshTimestamp
})