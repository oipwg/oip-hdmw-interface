import {Wallet as HDMW} from 'oip-hdmw'
import {InterfaceActions as actions} from '../actions'
import {initialState} from '../store'

const Interface = (state = initialState, action) => {
	switch (action.type) {
		case actions.LOAD_WALLET:
			return {
				...state,
				...initialState,
				wallet: new HDMW(action.mnemonic, {discover: false}),
				
			}
		case actions.SET_BALANCES:
			return {
				...state, balances: action.balances,
			}
		case actions.SET_DISPLAY_VIEW:
			return {
				...state, displayView: action.view,
			}
		case actions.SET_DETAIL_VIEW:
			return {
				...state, detailView: action.detailView,
			}
		case actions.SET_ACTIVE_COIN:
			return {
				...state,
				activeCoinName: action.coin,
				displayView: 'addresses',
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
		default:
			return state
	}
}

export default Interface