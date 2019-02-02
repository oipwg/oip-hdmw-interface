import React from "react";
import Paper from '@material-ui/core/Paper'

import DisplayContainer from '../containers/DisplayContainer'
import WalletHeader from './WalletHeader'
import RenderCoinSection from './Coins'

function WalletInterface(props) {
	const {classes,
		activeCoin,
		setActiveCoin,
		updateBalances,
		balances,
		exchangeRates,
		Wallet,
		displayCoins,
		displayBalances
	} = props
	return (
		<div className={classes.walletContainer}>
			<div className={classes.contentLayout}>
				<Paper elevation={1} className={classes.paperLayout}>
					<WalletHeader
						exchangeRates={exchangeRates}
						balances={balances}
						classes={classes}
						updateBalances={updateBalances}
						Wallet={Wallet}
					/>
					<div className={classes.sectionWrapper}>
						<RenderCoinSection
							balances={balances}
							activeCoin={activeCoin}
							setActiveCoin={setActiveCoin}
							classes={classes}
							exchangeRates={exchangeRates}
							coins={displayCoins}
							displayBalances={displayBalances}
							networks={Wallet.networks}
						/>
						<DisplayContainer Wallet={Wallet}/>
					</div>
				</Paper>
			</div>
		</div>
	)
}

export default WalletInterface