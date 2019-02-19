import React from 'react'
import PropTypes from 'prop-types'
import ClipboardJS from 'clipboard'
import {withStyles} from "@material-ui/core";

import {FileCopy} from "@material-ui/icons";
import notifier from '../../../lib/notifier'

import styles from '../../../styles/views/dumb/Addresses'

const Addresses = (props) => {
	console.log('Addresses Mount')
	const {classes} = props
	
	new ClipboardJS('.copy-to-clipboard')
	console.log("Addresses.render()")
	return (
		<div className={classes.addressContainer}>
			{props.addresses.map((addr, i) => (
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
						onClick={() => {
							props.increaseAddressCount()
						}}>
						+ Show next address
					</span>
			</div>
		</div>
	)
}

Addresses.propTypes = {
	Interface: PropTypes.object.isRequired,
	Wallet: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	increaseAddressCount: PropTypes.func.isRequired,
	addresses: PropTypes.array.isRequired,
}

export default withStyles(styles)(Addresses)