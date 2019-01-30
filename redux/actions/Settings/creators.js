//actions
export const TOGGLE_TESTNET_COINS = "TOGGLE_TESTNET_COINS"
export const toggleTestnetCoins = () => ({
	type: TOGGLE_TESTNET_COINS,
})

export const DISPLAY_BALANCES = 'DISPLAY_BALANCES'
export const displayBalances = () => ({
	type: DISPLAY_BALANCES
})

export const ADD_DISPLAY_COIN = 'ADD_DISPLAY_COIN'
export const addDisplayCoin = (displayCoin) => ({
	type: ADD_DISPLAY_COIN,
	displayCoin
})

export const REMOVE_DISPLAY_COIN = 'REMOVE_DISPLAY_COIN'
export const removeDisplayCoin = (displayCoin) => ({
	type: REMOVE_DISPLAY_COIN,
	displayCoin
})

export const SET_COIN_NETWORK_APIS = 'SET_COIN_NETWORK_APIS'
export const setCoinNetworkApis = (coinNetworkApis) => ({
	type: SET_COIN_NETWORK_APIS,
	coinNetworkApis
})
