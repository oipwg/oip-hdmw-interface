//actions
export const INCLUDE_TESTNET_COINS = "INCLUDE_TESTNET_COINS"
export const includeTestnetCoins = (bool) => ({
	type: INCLUDE_TESTNET_COINS,
	bool
})

export const DISPLAY_BALANCES = 'DISPLAY_BALANCES'
export const displayBalances = () => ({
	type: DISPLAY_BALANCES
})

export const SET_EXPLORER_URLS = 'SET_EXPLORER_URLS'
export const setExplorerUrls = (explorerUrls) => ({
	type: SET_EXPLORER_URLS,
	explorerUrls
})

export const SET_DEFAULT_EXPLORER_URLS = 'SET_DEFAULT_EXPLORER_URLS'
export const setDefaultExplorerUrls = (explorerUrls) => ({
	type: SET_DEFAULT_EXPLORER_URLS,
	explorerUrls
})

export const LOAD_SETTINGS = 'LOAD_SETTINGS'
export const loadSettings = (parsedSettings) => ({
	type: LOAD_SETTINGS,
	parsedSettings
})

export const TESTNET_ADDED = 'TESTNET_ADDED'
export const testnetAdded = () => ({
	type: TESTNET_ADDED
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