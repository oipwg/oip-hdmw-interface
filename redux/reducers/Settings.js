import * as actions from '../actions/Settings'

const Settings = (state = {
	showTestnetCoins: false,
}, action) => {
	switch (action.type) {
		case actions.SHOW_TESTNET_COINS:
			return {
				...state,
				showTestnetCoins: !state.showTestnetCoins
			}
		default:
			return state
	}
}

export default Settings