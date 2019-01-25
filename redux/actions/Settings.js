//actions
export const SHOW_TESTNET_COINS = "SHOW_TESTNET_COINS"
export const showTestnetCoins = () => ({
	type: SHOW_TESTNET_COINS,
})

//thunks
import {updateWalletTestnetCoins, setCoinState, setActiveCoin, refreshBalances} from './Interface'
export const HANDLE_TESTNET_COINS = "HANDLE_TESTNET_COINS"
export const handleTestnetCoins = (addOrRemove) => (dispatch, getState) => {
	dispatch(showTestnetCoins())
	dispatch(updateWalletTestnetCoins(addOrRemove))
	
	//true if ADDING testnet coins, false if REMOVING testnet coins
	if (addOrRemove) {
		dispatch(setCoinState())
		dispatch(refreshBalances())
	} else {
		if (getState().Interface.activeCoinName.includes('_testnet'))
			dispatch(setActiveCoin('bitcoin'))
	}
}