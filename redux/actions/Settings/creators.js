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

export const LOAD_FROM_LOCAL_STORAGE = 'LOAD_FROM_LOCAL_STORAGE'
export const loadFromLocalStorage = (settingsObject) => ({
	type: LOAD_FROM_LOCAL_STORAGE,
	settingsObject
})

export const TESTNET_ADDED = 'TESTNET_ADDED'
export const testnetAdded = () => ({
	type: TESTNET_ADDED
})
