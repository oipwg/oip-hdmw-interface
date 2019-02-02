import * as actions from '../actions/HDMW/creators'

const HDMW = (state = {
	mnemonic: undefined,
	balances: {},
	exchangeRates: {},
	lastUpdate: {}, //for coin balances
}, action) => {
	switch (action.type) {
		case actions.SET_MNEMONIC:
			return {
				...state,
				mnemonic: action.mnemonic
			}
		case actions.SET_EXCHANGE_RATES: {
			return {
				...state,
				exchangeRates: {...state.exchangeRates, ...action.xr},
				lastUpdate: {...state.lastUpdate, xr: Date.now()}
			}
		}
		case actions.SET_COIN_BALANCE: {
			return {
				...state,
				balances: {...state.balances, [action.coin]: action.balance},
				lastUpdate: {...state.lastUpdate, [action.coin]: Date.now()}
			}
		}
		case actions.SET_COIN_BALANCES: {
			let coins = Object.keys(action.balances)
			let updateObject = {}
			for (let coin of coins) {
				updateObject[coin] = Date.now()
			}
			return {
				...state,
				balances: {...state.balances, ...action.balances},
				lastUpdate: {...state.lastUpdate, ...updateObject}
			}
		}
		default:
			return state
	}
}

export default HDMW