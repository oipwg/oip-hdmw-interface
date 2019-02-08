import * as actions from '../actions/Interface/creators'

const Interface = (state = {
	activeCoin: 'bitcoin',
	activeView: 'addresses',
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
				coins: {
					...state.coins,
					[state.activeCoin]: {
						...state.coins[state.activeCoin],
						activeAccountIndex: action.index
					}
				},
			}
		case actions.SET_ACTIVE_CHAIN_INDEX:
			return {
				...state,
				coins: {
					...state.coins,
					[state.activeCoin]: {
						...state.coins[state.activeCoin],
						activeChainIndex: action.index
					}
				},
			}
		case actions.SET_ACTIVE_ADDRESS_INDEX:
			return {
				...state,
				coins: {
					...state.coins,
					[state.activeCoin]: {
						...state.coins[state.activeCoin],
						activeAddressIndex: action.index
					}
				},
			}
		case actions.INCREASE_ACCOUNT_COUNT:
			return {
				...state,
				coins: {
					...state.coins,
					[state.activeCoin]: {
						...state.coins[state.activeCoin],
						accountCount: state.coins[state.activeCoin].accountCount + action.count
					}
				},
			}
		case actions.INCREASE_ADDRESS_COUNT:
			return {
				...state,
				coins: {...state.coins,
					[state.activeCoin]: {
						...state.coins[state.activeCoin],
						addressCount: state.coins[state.activeCoin].addressCount + action.count
					}
				}
			}
		case actions.SET_INITIAL_COIN_STATES:
			return {
				...state,
				coins: {...state.coins, ...action.coinObject}
			}
		
		case actions.LOAD_INTERFACE:
			return {
				...state,
				...action.parsedInterfaceState
			}
		default:
			return state
	}
}

export default Interface