import * as actions from '../actions/Settings/creators'

const initialState = {
	includeTestnetCoins: false,
	testnetAdded: false,
	displayBalances: true,
	explorerUrls: {},
	defaultExplorerUrls: {},
	refreshLimit: 15000, // 15 seconds
}

const Settings = (state = initialState, action) => {
	switch (action.type) {
		case actions.INCLUDE_TESTNET_COINS:
			return {
				...state,
				includeTestnetCoins: action.bool
			}
		case actions.DISPLAY_BALANCES:
			return {
				...state,
				displayBalances: !state.displayBalances
			}
		case actions.SET_EXPLORER_URLS:
			return {
				...state,
				explorerUrls: {...state.explorerUrls, ...action.explorerUrls}
			}
		case actions.SET_DEFAULT_EXPLORER_URLS:
			return {
				...state,
				defaultExplorerUrls: {...state.defaultExplorerUrls, ...action.explorerUrls}
			}
		case actions.LOAD_FROM_LOCAL_STORAGE:
			return {
				...state,
				...action.settingsObject
			}
		case actions.TESTNET_ADDED:
			return {
				...state,
				testnetAdded: true
			}
		default:
			return state
	}
}

export default Settings