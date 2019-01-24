import React from 'react'
import ClipboardJS from 'clipboard'
import {FileCopy} from "@material-ui/icons";
import notifier from '../../lib/notifier'

const Addresses = (props) => {
	// console.log('Addresses()')
	const {classes, Interface, actions} = props
	
	const activeCoin = Interface.activeCoinName
	const coinProperties = Interface[activeCoin]
	
	let addresses = []
	let Coin = Interface.wallet.getCoin(activeCoin)
	let Account = Coin.getAccount(coinProperties.activeAccount)
	for (let i = 0; i < coinProperties.addresses; i++) {
		addresses.push(Account.getAddress(coinProperties.activeChain, i))
	}
	
	new ClipboardJS('.copy-to-clipboard')
	
	return (
		<div className={classes.addressContainer}>
				{addresses.map((addr, i) => (
					<div key={i} className={classes.addressRow}>
						<div className={classes.addressInfo}>
							<span className={classes.addressIndex}>/{i}  </span>
							<span id={`id-${i}`} className={classes.publicAddress}>{addr.getPublicAddress()}</span>
						</div>
						<FileCopy
							className={`copy-to-clipboard ${classes.copyToClipBoard}`}
							data-clipboard-target={`#id-${i}`}
							onClick={() => {
								let sel = window.getSelection()
								sel.empty()
								notifier('copied to clipboard')
							}}/>
					</div>
				))}
				<div className={classes.showExtraAddressContainer}>
					<span
						className={classes.showExtraAddress}
						onClick={() => {actions.increaseAddressCount()}}>
						+ Show new address
					</span>
				</div>
		</div>
	)
}

export default Addresses