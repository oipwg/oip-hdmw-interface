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
		case actions.SET_DETAIL_VIEW:
			return {
				...state, detailView: action.detailView,
			}
		case actions.SET_ACTIVE_COIN:
			return {
				...state,
				activeCoinName: action.activeCoin,
				activeAccountIndex: 0,
				activeChainIndex: 0,
				activeAddressIndex: 0,
			}
		case actions.SET_ACTIVE_ACCOUNT_INDEX:
			return {
				...state, activeAccountIndex: action.activeAccountIndex,
			}
		case actions.SET_ACTIVE_CHAIN_INDEX:
			return {
				...state, activeChainIndex: action.activeChainIndex,
			}
		case actions.SET_ACTIVE_ADDRESS_INDEX:
			return {
				...state, activeAddressIndex: action.activeAddressIndex,
			}
		case actions.INCREASE_NUM_OF_ACCOUNTS:
			return {
				...state, numOfAccountsToShow: state.numOfAccountsToShow + action.numOfAccountsToShow
			}
		case actions.INCREASE_NUM_OF_ADDRESSES:
			return {
				...state, numOfAddressesToShow: state.numOfAddressesToShow + action.numOfAddressesToShow
			}
		default:
			return state
	}
}

export default Interface