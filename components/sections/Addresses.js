import React from 'react'
import ClipboardJS from 'clipboard'
import {FileCopy} from "@material-ui/icons";

const Addresses = (props) => {
	// console.log('Addresses()')
	const {classes, Interface, actions} = props
	
	let addresses = []
	let coin = Interface.Coin ? Interface.Coin : Interface.wallet.getCoin(Interface.activeCoinName)
	let account = coin.getAccount(Interface.activeAccountIndex)
	for (let i = 0; i < Interface.numOfAddressesToShow; i++) {
		addresses.push(account.getAddress(Interface.activeChainIndex, i))
	}
	// for (let addr of addresses) {
	// 	console.log(addr.getPublicAddress())
	// }
	new ClipboardJS('.copy-to-clipboard')
	
	return (
		<div className={classes.addressContainer}>
				{addresses.map((addr, i) => (
					<div key={i} className={classes.addressRow}>
						<span id={`id-${i}`} className={classes.publicAddress}>{addr.getPublicAddress()}</span>
						<FileCopy
							className={`copy-to-clipboard ${classes.copyToClipBoard}`}
							data-clipboard-target={`#id-${i}`}
							onClick={() => {
								let sel = window.getSelection()
								sel.empty()
							}}/>
					</div>
				))}
		</div>
	)
}

export default Addresses