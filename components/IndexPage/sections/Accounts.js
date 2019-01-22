import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const Accounts = (props) => {
	const {classes, state, wallet, fn} = props
	let coin = wallet.getCoin(state.activeCoinName)
	let accounts = []
	for (let i = 0; i < state.numOfAccountsToShow; i++) {
		accounts.push(coin.getAccount(i))
	}
	const selectedAccountStyle = (i) => {
		if ((i === state.activeAccountIndex) && state.numOfAccountsToShow !== 1) {
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
						onClick={() => fn.handleAccountClick(account, i)}
						className={classes.accountNumber}
						style={selectedAccountStyle(i)}
					>
						{i + 1}
					</span>
				)
			})}
			<span
				onClick={() => {fn.handleAddAccount()}}
				className={classes.addAccountButton}>
				+
			</span>
		</div>
	)
}

export default Accounts
