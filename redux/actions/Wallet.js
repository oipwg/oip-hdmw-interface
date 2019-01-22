export const LOAD_WALLET = 'LOAD_WALLET'

export const loadWallet = (mnemonic) => ({
	type: LOAD_WALLET,
	mnemonic
})
