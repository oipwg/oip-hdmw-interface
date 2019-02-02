import {Wallet} from 'oip-hdmw'
import * as actions from '../actions/Settings/creators'

const initialState = {
	toggleTestnetCoins: false,
	displayBalances: true,
	coinNetworkApiUrls: Wallet.getDefaultNetworkApiUrls(),
	refreshLimit: 15000, // 15 seconds
}

const Settings = (state = initialState, action) => {
	switch (action.type) {
		case actions.TOGGLE_TESTNET_COINS:
			return {
				...state,
				toggleTestnetCoins: !state.toggleTestnetCoins
			}
		case actions.DISPLAY_BALANCES:
			return {
				...state,
				displayBalances: !state.displayBalances
			}
		case actions.SET_COIN_NETWORK_APIS:
			return {
				...state,
				coinNetworkApiUrls: {...state.coinNetworkApiUrls, ...action.coinNetworkApis}
			}
		case actions.LOAD_FROM_LOCAL_STORAGE:
			return {
				...state,
				...action.settingsObject
			}
		default:
			return state
	}
}

export default Settings