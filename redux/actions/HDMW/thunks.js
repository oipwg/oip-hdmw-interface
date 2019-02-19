import {
	setCoinBalance,
	setCoinBalances,
	setExchangeRates,
	setExchangeRate,
	setUsedPubAddresses,
	setTransactions,
	balancesError,
	balancesFetching,
	balancesSuccess,
	transactionsError,
	transactionsFetching,
	transactionsSuccess,
	sendPaymentError,
	sendPaymentFetching,
	sendPaymentSuccess,
	coinBalanceError,
	coinBalanceSuccess,
	coinBalanceFetching,
	xrError,
	xrFetching,
	xrSuccess,
} from "./creators";

export const updateCoinBalance = (coin, wallet, force = false) => async (dispatch) => {
	if (dispatch(shouldUpdate(coin)) || force) {
		dispatch(coinBalanceFetching(coin))
		
		let balance
		try {
			balance = await wallet.getCoinBalances({coins: [coin]})
		} catch (err) {
			dispatch(coinBalanceError(coin))
		}
		dispatch(updateCoinXrRate(wallet, coin))
		
		dispatch(setCoinBalance(coin, balance))
		dispatch(coinBalanceSuccess(coin))
		
		//return balance so we can await it before we dispatch a success
		return balance
	}
}

export const updateCoinXrRate = (wallet, coin) => async dispatch => {
	if (dispatch(shouldUpdate(`xr_${coin}`))) {
		let options = {coins: [coin]}
		dispatch(xrFetching(coin))
		
		wallet.getExchangeRates(options)
		.then(xr => {
			dispatch(setExchangeRate(coin, xr))
			dispatch(xrSuccess(coin))
			}
		)
		
		.catch(() => {
			dispatch(xrError(coin))
		})
	}
}

export const updateExchangeRates = (wallet, coins) => async dispatch => {
	if (dispatch(shouldUpdate('xr'))) {
		let options = {}
		if (coins)
			options.coins = coins
		let xr = await wallet.getExchangeRates(options)
		dispatch(setExchangeRates(xr))
	}
}

export const updateBalances = (wallet, coins, force = false) => async (dispatch) => {
	let _coins = coins ? coins : Object.keys(wallet.getCoins())
	if (typeof _coins === 'string') {
		_coins = [_coins]
	}
	let coinsToFetchBalances = []
	for (let coin of _coins) {
		if (dispatch(shouldUpdate(coin))) {
			coinsToFetchBalances.push(coin)
		}
	}
	let mainnetCoinExist = false
	for (let coin of coinsToFetchBalances) {
		if (!coin.includes('_testnet')) {
			mainnetCoinExist = true
			break
		}
	}
	if (mainnetCoinExist) {
		dispatch(balancesFetching())
	}
	let promiseArray = []
	for (let coin of coinsToFetchBalances) {
		promiseArray.push(dispatch(updateCoinBalance(coin, wallet, force)))
	}
	for (let promise of promiseArray) {
		await promise
	}
	dispatch(balancesSuccess())
}

export const shouldUpdate = name => (undefined, getState) => {
	const {Settings, HDMW} = getState()
	if (!HDMW.lastUpdate[name]) {
		return true
	}
	return (Date.now() - Settings.refreshLimit) >= HDMW.lastUpdate[name];
}

export const getTransactions = (Wallet, explorer) => async (dispatch, getState) => {
	const {Interface} = getState()
	const activeCoin = Interface.activeCoin
	const coinState = Interface.coins[activeCoin]
	
	let COIN = Wallet.getCoin(activeCoin)
	
	if (!activeCoin || !coinState || !COIN) {
		dispatch(transactionsError())
		console.error('missing variable in getTransactions thunk', activeCoin, coinState, COIN)
		return
	}
	let ACCOUNT = COIN.getAccount(coinState.activeAccountIndex)
	
	try {
		ACCOUNT = await ACCOUNT.discoverChains()
	} catch (err) {
		dispatch(transactionsError())
		console.error(`Failed to discover chains on account in thunk`)
		return
	}
	
	let usedAddresses = await ACCOUNT.getUsedAddresses()
	
	let usedPubAddresses = []
	let transactionIds = []
	for (let addr of usedAddresses) {
		usedPubAddresses.push(addr.getPublicAddress())
		for (let tx of addr.transactions) {
			transactionIds.push(tx)
		}
	}
	
	dispatch(transactionsFetching())
	let transactions = {}
	for (let id of transactionIds) {
		try {
			transactions[id] = await explorer.getTransaction(id)
		} catch (err) {
			dispatch(transactionsError())
			console.error('failed to get transaction from explorer in getTransactions thunk', err, explorer)
			return
		}
	}
	
	dispatch(setUsedPubAddresses(usedPubAddresses, activeCoin, coinState.activeAccountIndex))
	dispatch(setTransactions(transactions, activeCoin, coinState.activeAccountIndex))
	
	dispatch(transactionsSuccess())
	return transactions
}
