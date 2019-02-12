import * as actions from '../actions/HDMW/creators'

const HDMW = (state = {
	mnemonic: undefined,
	balances: {},
	exchangeRates: {},
	lastUpdate: {},
	balanceAsyncState: {
		success: false,
		error: false,
		fetching: false,
	},
	transactionAsyncState: {
		success: false,
		error: false,
		fetching: false,
	},
	sendPaymentAsyncState: {
		success: false,
		error: false,
		fetching: false,
	},
	coinAsyncState: {}
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
		case actions.BALANCES_FETCHING:
			return {
				...state,
				balanceAsyncState: {...state.balanceAsyncState, fetching: true, success: false, error: false}
			}
		case actions.BALANCES_SUCCESS:
			return {
				...state,
				balanceAsyncState: {...state.balanceAsyncState, fetching: false, success: true, error: false}
			}
		case actions.BALANCES_ERROR:
			return {
				...state,
				balanceAsyncState: {...state.balanceAsyncState, fetching: false, success: false, error: true}
			}
		case actions.TRANSACTIONS_FETCHING:
			return {
				...state,
				transactionAsyncState: {fetching: true, success: false, error: false}
			}
		case actions.TRANSACTIONS_ERROR:
			return {
				...state,
				transactionAsyncState: {etching: false, success: false, error: true}
			}
		case actions.TRANSACTIONS_SUCCESS:
			return {
				...state,
				transactionAsyncState: {fetching: false, success: true, error: false}
			}
		case actions.CLEAR_TX_ASYNC_STATE:
			return {
				...state,
				transactionAsyncState: {fetching: false, success: false, error: false}
			}
		case actions.SEND_PAYMENT_FETCHING:
			return {
				...state,
				sendPaymentAsyncState: {...state.sendPaymentAsyncState, fetching: true, success: false, error: false}
			}
		case actions.SEND_PAYMENT_ERROR:
			return {
				...state,
				sendPaymentAsyncState: {...state.sendPaymentAsyncState, fetching: false, success: true, error: false}
			}
		case actions.SEND_PAYMENT_SUCCESS:
			return {
				...state,
				sendPaymentAsyncState: {...state.sendPaymentAsyncState, fetching: false, success: false, error: true}
			}
		case actions.COIN_BALANCE_FETCHING: {
			return {
				...state,
				coinAsyncState: {
					...state.coinAsyncState,
					[action.coin]: {
						...state.coinAsyncState[action.coin],
						fetching: true,
						success: false,
						error: false,
					}
				}
			}
		}
		case actions.COIN_ASYNC_STATE_ERROR: {
			return {
				...state,
				coinAsyncState: {
					...state.coinAsyncState,
					[action.coin]: {
						...state.coinAsyncState[action.coin],
						fetching: false,
						success: false,
						error: true,
					}
				}
			}
		}
		case actions.COIN_ASYNC_STATE_SUCCESS: {
			return {
				...state,
				coinAsyncState: {
					...state.coinAsyncState,
					[action.coin]: {
						...state.coinAsyncState[action.coin],
						fetching: false,
						success: true,
						error: false,
					}
				}
			}
		}
		default:
			return state
	}
}

export default HDMW