import {Wallet as HDMW} from 'oip-hdmw'
import {InterfaceActions as actions} from '../actions'
import {initialState} from '../store'

const Interface = (state = initialState, action) => {
	switch (action.type) {
		case actions.LOAD_WALLET:
			return {
				...state, wallet: new HDMW(action.mnemonic, {discover: false}),
			}
		case actions.SET_BALANCES:
			return {
				...state, balances: action.balances,
			}
		default:
			return state
	}
}

export default Interface