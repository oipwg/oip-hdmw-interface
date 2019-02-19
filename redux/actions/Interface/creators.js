//actions + types
export const SET_ACTIVE_VIEW = 'SET_ACTIVE_VIEW'
export const setActiveView = (view) => ({
	type: SET_ACTIVE_VIEW,
	view
})

export const SET_ACTIVE_COIN = 'SET_ACTIVE_COIN'
export const setActiveCoin = (coin) => ({
	type: SET_ACTIVE_COIN,
	coin
})

export const SET_ACTIVE_ACCOUNT_INDEX = 'SET_ACTIVE_ACCOUNT_INDEX'
export const setActiveAccountIndex = (index) => ({
	type: SET_ACTIVE_ACCOUNT_INDEX,
	index
})

export const SET_ACTIVE_CHAIN_INDEX = 'SET_ACTIVE_CHAIN_INDEX'
export const setActiveChainIndex = (index) => ({
	type: SET_ACTIVE_CHAIN_INDEX,
	index
})

export const SET_ACTIVE_ADDRESS_INDEX = 'SET_ACTIVE_ADDRESS_INDEX'
export const setActiveAddressIndex = (index) => ({
	type: SET_ACTIVE_ADDRESS_INDEX,
	index
})

export const INCREASE_ACCOUNT_COUNT = 'INCREASE_ACCOUNT_COUNT'
export const increaseAccountCount = (i = 1) => ({
	type: INCREASE_ACCOUNT_COUNT,
	numOfAccountsToShow: i
})

export const INCREASE_ADDRESS_COUNT = 'INCREASE_ADDRESS_COUNT'
export const increaseAddressCount = (i = 1) => ({
	type: INCREASE_ADDRESS_COUNT,
	count: i
})
export const SET_ADDRESS_COUNT = 'SET_ADDRESS_COUNT'
export const setAddressCount = (count) => ({
	type: SET_ADDRESS_COUNT,
	count,
})

export const SET_INITIAL_COIN_STATES = 'SET_INITIAL_COIN_STATES'
export const setInitialCoinStates = (coinObject) => {
	return {
		type: SET_INITIAL_COIN_STATES,
		coinObject
	}
}

export const LOAD_INTERFACE = 'LOAD_INTERFACE'
export const loadInterface = (parsedInterfaceState) => ({
	type: LOAD_INTERFACE,
	parsedInterfaceState
})