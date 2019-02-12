export const SET_MNEMONIC = 'SET_MNEMONIC'
export const setMnemonic = (mnemonic) => ({
	type: SET_MNEMONIC,
	mnemonic
})

export const SET_EXCHANGE_RATES = 'SET_EXCHANGE_RATES'
export const setExchangeRates = (xr) => ({
	type: SET_EXCHANGE_RATES,
	xr
})

export const SET_COIN_BALANCE = 'SET_COIN_BALANCE'
export const setCoinBalance = (coin, balance) => ({
	type: SET_COIN_BALANCE,
	coin,
	balance: balance
})

export const SET_COIN_BALANCES = 'SET_COIN_BALANCES'
export const setCoinBalances = (balances) => ({
	type: SET_COIN_BALANCES,
	balances
})

export const SET_TRANSACTIONS = 'SET_TRANSACTIONS'
export const setTransactions = (transactions, coin, account) => ({
	type: SET_TRANSACTIONS,
	transactions,
	coin,
	account
})

export const SET_USED_PUB_ADDRESSES = 'SET_USED_PUB_ADDRESSES'
export const setUsedPubAddresses = (usedPubAddresses, coin, account) => ({
	type: SET_USED_PUB_ADDRESSES,
	usedPubAddresses,
	coin,
	account
})

export const BALANCES_FETCHING = 'BALANCES_FETCHING'
export const balancesFetching = () => ({
	type: BALANCES_FETCHING
})

export const BALANCES_ERROR = 'BALANCES_ERROR'
export const balancesError = () => ({
	type: BALANCES_ERROR
})

export const BALANCES_SUCCESS = 'BALANCES_SUCCESS'
export const balancesSuccess = () => ({
	type: BALANCES_SUCCESS
})

export const TRANSACTIONS_FETCHING = 'TRANSACTIONS_FETCHING'
export const transactionsFetching = () => ({
	type: TRANSACTIONS_FETCHING
})

export const TRANSACTIONS_ERROR = 'TRANSACTIONS_ERROR'
export const transactionsError = () => ({
	type: TRANSACTIONS_ERROR
})

export const TRANSACTIONS_SUCCESS = 'TRANSACTIONS_SUCCESS'
export const transactionsSuccess = () => ({
	type: TRANSACTIONS_SUCCESS
})

export const CLEAR_TX_ASYNC_STATE = 'CLEAR_TX_ASYNC_STATE'
export const clearTxAsyncState = () => ({
	type: CLEAR_TX_ASYNC_STATE
})

export const SEND_PAYMENT_FETCHING = 'SEND_PAYMENT_FETCHING'
export const sendPaymentFetching = () => ({
	type: SEND_PAYMENT_FETCHING
})

export const SEND_PAYMENT_ERROR = 'SEND_PAYMENT_ERROR'
export const sendPaymentError = () => ({
	type: SEND_PAYMENT_ERROR
})

export const SEND_PAYMENT_SUCCESS = 'SEND_PAYMENT_SUCCESS'
export const sendPaymentSuccess = () => ({
	type: SEND_PAYMENT_SUCCESS
})

export const CLEAR_SEND_PAYMENT_ASYNC_STATE = 'CLEAR_SEND_PAYMENT_ASYNC_STATE'
export const clearSendPaymentAsyncState = () => ({
	type: CLEAR_SEND_PAYMENT_ASYNC_STATE
})

export const COIN_BALANCE_FETCHING = 'COIN_BALANCE_FETCHING'
export const coinBalanceFetching = (coin) => ({
	type: COIN_BALANCE_FETCHING,
	coin,
})

export const COIN_ASYNC_STATE_ERROR = 'COIN_ASYNC_STATE_ERROR'
export const coinBalanceError = (coin) => ({
	type: COIN_ASYNC_STATE_ERROR,
	coin,
})

export const COIN_ASYNC_STATE_SUCCESS = 'COIN_ASYNC_STATE_SUCCESS'
export const coinBalanceSuccess = (coin) => ({
	type: COIN_ASYNC_STATE_SUCCESS,
	coin,
})