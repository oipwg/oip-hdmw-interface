import {setInitialCoinStates, addDisplayCoin} from "./creators";

// thunks
export const createInitialCoinStates = (wallet) => (dispatch, getState) => {
	const Interface = getState().Interface
	
	let coinnames = Object.keys(wallet.getCoins())
	let coinObject = {}
	
	for (let coin of coinnames) {
		let match = false
		for (let key in Interface) {
			if (key === coin) {
				match = true
			}
		}
		if (!match) {
			coinObject[coin] = {
				addresses: 1,
				accounts: 1,
				activeAccount: 0,
				activeChain: 0,
				activeAddress: 0,
			}
		}
	}
	
	if (Object.keys(coinObject).length > 0) {
		dispatch(setInitialCoinStates(coinObject))
		for (let coin of Object.keys(coinObject)) {
			dispatch(addDisplayCoin(coin))
		}
	}
}