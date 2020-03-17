import * as actions from '../actions/Settings/creators'

const initialState = {
	includeTestnetCoins: false,
	testnetAdded: false,
	displayBalances: true,
	explorerUrls: {},
	defaultExplorerUrls: {},
	displayCoins: ['flo', 'raven'],
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
		case actions.LOAD_SETTINGS:
			return {
				...state,
				...action.parsedSettings,
			}
		case actions.TESTNET_ADDED:
			return {
				...state,
				testnetAdded: true
			}
		case actions.ADD_DISPLAY_COIN:
			return {
				...state,
				displayCoins: addUniqueItemToArray(state.displayCoins, action.displayCoin)
			}
		case actions.REMOVE_DISPLAY_COIN:
			return {
				...state,
				displayCoins: removeItemFromArray(state.displayCoins, action.displayCoin)
			}
		default:
			return state
	}
}

export default Settings

const removeItemFromArray = (originalArray, itemToRemove) => originalArray.filter(item => item !== itemToRemove)
const addUniqueItemToArray = (array, item) => {
	let match = false
	for (let i of array) {
		if (item === i) {
			match = true
		}
	}
	if (!match) {
		return [...array, item]
	} else {
		return [...array] //just to ensure 0 mutation
	}
}
