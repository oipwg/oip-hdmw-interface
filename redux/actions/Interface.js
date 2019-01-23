//types
export const LOAD_WALLET = 'LOAD_WALLET'
export const SET_BALANCES = 'SET_BALANCES'

//actions
export const loadWallet = (mnemonic) => ({
	type: LOAD_WALLET,
	mnemonic
})

export const setBalances = (balances) => ({
	type: SET_BALANCES,
	balances
})

//thunks
export const fetchAndSetBalances = () => async (dispatch, getState) => {
	const wallet = getState().Interface.wallet
	const balances = await wallet.getCoinBalances()
	dispatch(setBalances(balances))
}


