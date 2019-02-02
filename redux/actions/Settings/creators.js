//actions
export const TOGGLE_TESTNET_COINS = "TOGGLE_TESTNET_COINS"
export const toggleTestnetCoins = () => ({
	type: TOGGLE_TESTNET_COINS,
})

export const DISPLAY_BALANCES = 'DISPLAY_BALANCES'
export const displayBalances = () => ({
	type: DISPLAY_BALANCES
})

export const SET_COIN_NETWORK_APIS = 'SET_COIN_NETWORK_APIS'
export const setCoinNetworkApis = (coinNetworkApis) => ({
	type: SET_COIN_NETWORK_APIS,
	coinNetworkApis
})

export const SET_DEFAULT_COIN_NETWORK_APIS = 'SET_DEFAULT_COIN_NETWORK_APIS'
export const setDefaultCoinNetworkApis = (coinNetworkApis) => ({
	type: SET_DEFAULT_COIN_NETWORK_APIS,
	coinNetworkApis
})

export const LOAD_FROM_LOCAL_STORAGE = 'LOAD_FROM_LOCAL_STORAGE'
export const loadFromLocalStorage = (settingsObject) => ({
	type: LOAD_FROM_LOCAL_STORAGE,
	settingsObject
	
})
