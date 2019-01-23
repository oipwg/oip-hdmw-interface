import React from 'react'
import ClipboardJS from 'clipboard'
import {FileCopy} from "@material-ui/icons";
import {increaseAddressCount} from "../../redux/actions/Interface";

const Addresses = (props) => {
	// console.log('Addresses()')
	const {classes, Interface, actions} = props
	
	const activeCoin = Interface.activeCoinName
	const coinProperties = Interface[activeCoin]
	
	let addresses = []
	let Coin = Interface.wallet.getCoin(activeCoin)
	let Account = Coin.getAccount(Interface.activeAccountIndex)
	for (let i = 0; i < coinProperties.addresses; i++) {
		addresses.push(Account.getAddress(Interface.activeChainIndex, i))
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
								// actions.increaseAddressCount()
							}}/>
					</div>
				))}
		</div>
	)
}

export default Addresses