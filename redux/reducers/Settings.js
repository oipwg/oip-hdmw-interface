import * as actions from '../actions/Settings/creators'

const Settings = (state = {
	toggleTestnetCoins: false,
}, action) => {
	switch (action.type) {
		case actions.TOGGLE_TESTNET_COINS:
			return {
				...state,
				toggleTestnetCoins: !state.toggleTestnetCoins
			}
		default:
			return state
	}
}

export default Settings