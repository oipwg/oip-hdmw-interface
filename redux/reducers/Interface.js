import * as actions from '../actions/Interface/creators'

const Interface = (state = {
	activeCoin: 'bitcoin',
	activeView: 'addresses',
	displayCoins: [],
	coins: {},
}, action) => {
	switch (action.type) {
		case actions.SET_ACTIVE_VIEW:
			return {
				...state, activeView: action.view,
			}
		case actions.SET_ACTIVE_COIN:
			return {
				...state,
				activeCoin: action.coin
			}
		case actions.SET_ACTIVE_ACCOUNT_INDEX:
			return {
				...state,
				[state.activeCoin]: {...state[state.activeCoin], activeAccount: action.index},
			}
		case actions.SET_ACTIVE_CHAIN_INDEX:
			return {
				...state,
				[state.activeCoin]: {...state[state.activeCoin], activeChain: action.index}
			}
		case actions.SET_ACTIVE_ADDRESS_INDEX:
			return {
				...state,
				[state.activeCoin]: {...state[state.activeCoin], activeAddress: action.index}
			}
		case actions.INCREASE_ACCOUNT_COUNT:
			return {
				...state,
				[state.activeCoin]: {...state[state.activeCoin], accounts: state[state.activeCoin].accounts + action.count}
			}
		case actions.INCREASE_ADDRESS_COUNT:
			return {
				...state,
				[state.activeCoin]: {...state[state.activeCoin], addresses: state[state.activeCoin].addresses + action.count}
			}
		case actions.SET_INITIAL_COIN_STATES:
			return {
				...state,
				...action.coinObject,
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

export default Interface

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
