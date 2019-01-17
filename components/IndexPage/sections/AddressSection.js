import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination'

import EnhancedTableToolbar from '../EnhancedTableToolbar'

const AddressesSection = (props) => {
	const {classes, state, wallet} = props
	
	let addresses = []
	let coin = state.Coin ? state.Coin : wallet.getCoin(state.activeCoinName)
	let account = coin.getAccount(state.activeAccountIndex)
	for (let i = 0; i < state.numOfAddressesToShow; i++) {
		addresses.push(account.getAddress(state.activeChain, i))
	}
	for (let addr of addresses) {
		console.log(addr.getPublicAddress())
	}
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

export default AddressesSection