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
		<div className={classes.sectionAddresses}>
			<Paper classes={{root: classes.rootTable}} elevation={1}>
				<EnhancedTableToolbar numSelected={0} activeCoinName={state.activeCoinName} activeAccountIndex={state.activeAccountIndex} />
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>Address (P2PKH) </TableCell>
							<TableCell align="right">Balance</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{addresses.map((addr, id) => (
							<TableRow key={id}>
								<TableCell component="th" scope="row">
									{addr.getPublicAddress()}
								</TableCell>
								<TableCell align="right">0.00</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={10}
					rowsPerPage={5}
					page={0}
					backIconButtonProps={{
						'aria-label': 'Previous Page',
					}}
					nextIconButtonProps={{
						'aria-label': 'Next Page',
					}}
					onChangePage={() => {console.log('onChangePage')}}
					onChangeRowsPerPage={() => {console.log('onChangeRowsPerPage')}}
				/>
			</Paper>
		</div>
	)
}

export default AddressesSection