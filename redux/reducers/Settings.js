import * as actions from '../actions/Settings/creators'

const Settings = (state = {
	toggleTestnetCoins: false,
	displayBalances: true,
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
		default:
			return state
	}
}

export default Settings