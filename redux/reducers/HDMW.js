import * as actions from '../actions/HDMW/creators'
import _ from 'lodash'

const HDMW = (state = {
	mnemonic: undefined,
	balances: {},
	exchangeRates: {},
	lastUpdate: {},
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
		case actions.SET_TRANSACTIONS: {
			return {
				...state,
				[`txs_${action.coin}_${action.account}`]: action.transactions
			}
		}
		case actions.SET_USED_PUB_ADDRESSES: {
			return {
				...state,
				[`upa_${action.coin}_${action.account}`]: action.usedPubAddresses
			}
		}
		default:
			return state
	}
}

export default HDMW