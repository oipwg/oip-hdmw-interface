import React from 'react'

const Addresses = (props) => {
	console.log('Addresses()')
	const {classes, Interface} = props
	
	let addresses = []
	let coin = Interface.Coin ? Interface.Coin : Interface.wallet.getCoin(Interface.activeCoinName)
	let account = coin.getAccount(Interface.activeAccountIndex)
	for (let i = 0; i < Interface.numOfAddressesToShow; i++) {
		addresses.push(account.getAddress(Interface.activeChainIndex, i))
	}
	// for (let addr of addresses) {
	// 	console.log(addr.getPublicAddress())
	// }
	return (
		<div className={classes.addressContainer}>
				{addresses.map((addr, id) => (
					<div key={id} className={classes.addressRow}>
						<span>{addr.getPublicAddress()}</span>
					</div>
				))}
		</div>
	)
}

export default Addresses