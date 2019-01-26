import * as actions from '../actions/Interface/creators'

const Interface = (state = {
	activeCoinName: 'bitcoin',
	displayView: 'addresses',
	
	bitcoin: {
		addresses: 1,
		accounts: 1,
		activeAccount: 0,
		activeChain: 0,
		activeAddress: 0,
	},
	flo: {
		addresses: 1,
		accounts: 1,
		activeAccount: 0,
		activeChain: 0,
		activeAddress: 0,
	},
	litecoin: {
		addresses: 1,
		accounts: 1,
		activeAccount: 0,
		activeChain: 0,
		activeAddress: 0,
	},
}, action) => {
	switch (action.type) {
		case actions.SET_DISPLAY_VIEW:
			return {
				...state, displayView: action.view,
			}
		case actions.SET_ACTIVE_COIN:
			return {
				...state,
				activeCoinName: action.coin
			}
		case actions.SET_ACTIVE_ACCOUNT_INDEX:
			return {
				...state,
				[state.activeCoinName]: {...state[state.activeCoinName], activeAccount: action.index},
			}
		case actions.SET_ACTIVE_CHAIN_INDEX:
			return {
				...state,
				[state.activeCoinName]: {...state[state.activeCoinName], activeChain: action.index}
			}
		case actions.SET_ACTIVE_ADDRESS_INDEX:
			return {
				...state,
				[state.activeCoinName]: {...state[state.activeCoinName], activeAddress: action.index}
			}
		case actions.INCREASE_ACCOUNT_COUNT:
			return {
				...state,
				[state.activeCoinName]: {...state[state.activeCoinName], accounts: state[state.activeCoinName].accounts + action.count}
			}
		case actions.INCREASE_ADDRESS_COUNT:
			return {
				...state,
				[state.activeCoinName]: {...state[state.activeCoinName], addresses: state[state.activeCoinName].addresses + action.count}
			}
		case actions.SET_INITIAL_COIN_STATES:
			return {
				...state,
				...action.coinObject,
			}
		default:
			return state
	}
}

export default Interface