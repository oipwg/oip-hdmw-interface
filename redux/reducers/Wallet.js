import {Wallet as HDMW} from 'oip-hdmw'
import {WalletActions as actions} from '../actions'
import {initialState} from '../store'

const Wallet = (state = initialState, action) => {
	switch (action.type) {
		case actions.LOAD_WALLET:
			return {
				...state, wallet: new HDMW(action.mnemonic)
			}
		default:
			return state
	}
}

export default Wallet