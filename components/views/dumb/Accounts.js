import React from "react";
import {withStyles} from "@material-ui/core";

import styles from '../../../styles/views/dumb/Accounts'

const Accounts = (props) => {
	// console.log('Accounts()')
	const {classes, Interface, actions} = props
	let coin = Interface.wallet.getCoin(Interface.activeCoinName)
	let accounts = []
	for (let i = 0; i < Interface.numOfAccountsToShow; i++) {
		accounts.push(coin.getAccount(i))
	}
	const selectedAccountStyle = (i) => {
		if ((i === Interface.activeAccountIndex) && Interface.numOfAccountsToShow !== 1) {
			return {
				fontSize: '23px'
			}
		}
	}
	return (
		<div className={classes.sectionAccounts}>
			{accounts.map((account, i) => {
				return (
					<span
						key={i}
						onClick={() => actions.setActiveAccountIndex(i)}
						className={classes.accountNumber}
						style={selectedAccountStyle(i)}
					>
						{i + 1}
					</span>
				)
			})}
			<span
				onClick={() => {actions.increaseNumOfAccounts()}}
				className={classes.addAccountButton}>
				+
			</span>
		</div>
	)
}

export default withStyles(styles)(Accounts)
