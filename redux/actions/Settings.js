export const SHOW_TESTNET_COINS = "SHOW_TESTNET_COINS"
export const showTestnetCoins = () => ({
	type: SHOW_TESTNET_COINS,
})

import {updateWalletTestnetCoins, setCoinState} from './Interface'
export const HANDLE_TESTNET_COINS = "HANDLE_TESTNET_COINS"
export const handleTestnetCoins = (bool) => dispatch => {
	dispatch(showTestnetCoins())
	dispatch(updateWalletTestnetCoins(bool))
	dispatch(setCoinState())
}