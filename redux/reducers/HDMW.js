import * as actions from '../actions/HDMW/creators'

const HDMW = (state = {
	mnemonic: undefined,
	discover: false,
	balances: undefined,
	fiatBalances: undefined,
	exchangeRates: undefined,
}, action) => {
	switch (action.type) {
		case actions.SET_MNEMONIC:
			return {
				...state,
				mnemonic: action.mnemonic
			}
		case actions.SET_DISCOVER: {
			return {
				...state,
				discover: action.discover
			}
		}
		case actions.SET_BALANCES: {
			return {
				...state,
				balances: action.balances,
			}
		}
		case actions.SET_FIAT_BALANCES: {
			return {
				...state,
				fiatBalances: action.fiatBalances
			}
		}
		case actions.SET_EXCHANGE_RATES: {
			return {
				...state,
				exchangeRates: action.xr
			}
		}
		default:
			return state
	}
}

export default HDMW