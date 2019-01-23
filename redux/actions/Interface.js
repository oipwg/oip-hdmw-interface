//actions + types
export const LOAD_WALLET = 'LOAD_WALLET'
export const loadWallet = (mnemonic) => ({
	type: LOAD_WALLET,
	mnemonic
})

export const SET_BALANCES = 'SET_BALANCES'
export const setBalances = (balances) => ({
	type: SET_BALANCES,
	balances
})

export const SET_DETAIL_VIEW = 'SET_DETAIL_VIEW'
export const setDetailView = (detailView) => ({
	type: SET_DETAIL_VIEW,
	detailView
})

export const SET_ACTIVE_COIN = 'SET_ACTIVE_COIN'
export const setActiveCoin = (activeCoin) => ({
	type: SET_ACTIVE_COIN,
	activeCoin
})

export const SET_ACTIVE_ACCOUNT_INDEX = 'SET_ACTIVE_ACCOUNT_INDEX'
export const setActiveAccountIndex = (activeAccountIndex) => ({
	type: SET_ACTIVE_ACCOUNT_INDEX,
	activeAccountIndex
})

export const SET_ACTIVE_CHAIN_INDEX = 'SET_ACTIVE_CHAIN_INDEX'
export const setActiveChainIndex = (activeChainIndex) => ({
	type: SET_ACTIVE_CHAIN_INDEX,
	activeChainIndex
})

export const SET_ACTIVE_ADDRESS_INDEX = 'SET_ACTIVE_ADDRESS_INDEX'
export const setActiveAddressIndex = (activeAddressIndex) => ({
	type: SET_ACTIVE_ADDRESS_INDEX,
	activeAddressIndex
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


//thunks
export const fetchAndSetBalances = () => async (dispatch, getState) => {
	const wallet = getState().Interface.wallet
	const balances = await wallet.getCoinBalances()
	dispatch(setBalances(balances))
}


