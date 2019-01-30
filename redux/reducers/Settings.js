import * as actions from '../actions/Settings/creators'

const Settings = (state = {
	toggleTestnetCoins: false,
	displayBalances: true,
	displayCoins: ['bitcoin', 'litecoin', 'flo']
}, action) => {
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
		case actions.ADD_DISPLAY_COIN:
			return {
				...state,
				displayCoins: [...state.displayCoins, action.displayCoin]
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