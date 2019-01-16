import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const AccountSection = (props) => {
	const {classes, state, wallet, fn} = props
	let coin = wallet.getCoin(state.activeCoinName)
	let accounts = []
	for (let i = 0; i < state.numOfAccountsToShow; i++) {
		accounts.push(coin.getAccount(i))
	}
	return (
		<div className={classes.sectionAccounts}>
			{accounts.map((account, i) => {
				return (
					<Card key={i} className={classes.coinCard}>
						<ButtonBase className={classes.cardButtonBase} onClick={() => {
							fn.handleAccountCardClick(account, i)
						}}>
							<CardContent>
								<Typography className={classes.coinTypography}>
									Account {i + 1}
								</Typography>
							</CardContent>
						</ButtonBase>
					</Card>
				)
			})}
			<Card className={`${classes.coinCard}`}>
				<ButtonBase className={classes.cardButtonBase} onClick={() => {
					fn.handleAddAccount()
				}}>
					<CardContent>
						<Typography className={classes.extraCoinTypography}>
							+
						</Typography>
					</CardContent>
				</ButtonBase>
			</Card>
		</div>
	)
}

export default AccountSection
