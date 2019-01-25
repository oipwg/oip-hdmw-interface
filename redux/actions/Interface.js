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

export const SET_DISPLAY_VIEW = 'SET_DISPLAY_VIEW'
export const setDisplayView = (view) => ({
	type: SET_DISPLAY_VIEW,
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

export const SET_INITIAL_COIN_STATES = 'SET_INITIAL_COIN_STATES'
export const setInitialCoinStates = (coinObject) => {
	console.log('setting InitialCoinStates', coinObject)
	return {
		type: SET_INITIAL_COIN_STATES,
		coinObject
	}
}

export const UPDATE_WALLET_TESTNET_COINS = 'UPDATE_WALLET_TESTNET_COINS'
export const updateWalletTestnetCoins = (addOrRemove) => ({
	type: UPDATE_WALLET_TESTNET_COINS,
	addOrRemove
})

export const SET_EXCHANGE_RATES = 'SET_EXCHANGE_RATES'
export const setExchangeRates = (xr) => ({
	type: SET_EXCHANGE_RATES,
	xr
})


//thunks
export const getExchangeRates = () => async (dispatch, getState) => {
	const wallet = getState().Interface.wallet
	let coins = Object.keys(wallet.getCoins())
	for (let i = coins.length -1; i >= 0; i--) {
		if (coins[i].includes('_testnet')) {
			coins.splice(i, 1)
		}
	}

	const xr = await wallet.getExchangeRates({coins})
	dispatch(setExchangeRates(xr))
}

export const fetchAndSetBalances = () => async (dispatch, getState) => {
	const wallet = getState().Interface.wallet
	const balances = await wallet.getCoinBalances({testnet: false})
	dispatch(setBalances(balances))
}

export const setCoinState = () => (dispatch, getState) => {
	const state = getState().Interface
	const wallet = state.wallet
	let coinnames = Object.keys(wallet.getCoins())
	let coinObject = {}
	
	for (let coin of coinnames) {
		let match = false
		for (let prop in state) {
			if (prop === coin) {
				match = true
			}
		}
		if (!match) {
			coinObject[coin] = {
				addresses: 1,
				accounts: 1,
				activeAccount: 0,
				activeChain: 0,
				activeAddress: 0,
			}
		}
	}

	if (Object.keys(coinObject).length > 0)
		dispatch(setInitialCoinStates(coinObject))
}

