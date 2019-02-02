export const SET_MNEMONIC = 'SET_MNEMONIC'
export const setMnemonic = (mnemonic) => ({
	type: SET_MNEMONIC,
	mnemonic
})

export const SET_EXCHANGE_RATES = 'SET_EXCHANGE_RATES'
export const setExchangeRates = (xr) => ({
	type: SET_EXCHANGE_RATES,
	xr
})

export const SET_COIN_BALANCE = 'SET_COIN_BALANCE'
export const setCoinBalance = (coin, balance) => ({
	type: SET_COIN_BALANCE,
	coin,
	balance: balance
})

export const SET_COIN_BALANCES = 'SET_COIN_BALANCES'
export const setCoinBalances = (balances) => ({
	type: SET_COIN_BALANCES,
	balances
})