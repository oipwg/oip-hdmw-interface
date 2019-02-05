import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import Paper from '@material-ui/core/Paper'

import DisplayContainer from '../../containers/DisplayContainer'
import InterfaceHeader from '../dumb/InterfaceHeader'
import Coins from '../dumb/Coins'

import styles from '../../../styles/views/wrappers/InterfaceWrapper'

function InterfaceWrapper(props) {
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
		<div className={classes.interfaceContainer}>
			<div className={classes.interfaceWrapper}>
				<Paper elevation={1} className={classes.interfacePaperBG}>
					<InterfaceHeader
						exchangeRates={exchangeRates}
						balances={balances}
						updateBalances={updateBalances}
						Wallet={Wallet}
						displayCoins={displayCoins}
					/>
					<div className={classes.contentWrapper}>
						<Coins
							balances={balances}
							activeCoin={activeCoin}
							setActiveCoin={setActiveCoin}
							exchangeRates={exchangeRates}
							displayCoins={displayCoins}
							displayBalances={displayBalances}
							networks={Wallet.networks}
							Wallet={Wallet}
						/>
						<DisplayContainer Wallet={Wallet}/>
					</div>
				</Paper>
			</div>
		</div>
	)
}

InterfaceWrapper.propTypes = {
	//jss
	classes: PropTypes.object.isRequired,
	//wallet
	Wallet: PropTypes.object.isRequired,
	//actions
	setActiveCoin: PropTypes.func.isRequired,
	updateBalances: PropTypes.func.isRequired,
	//state
	activeCoin: PropTypes.string.isRequired,
	balances: PropTypes.object.isRequired,
	exchangeRates: PropTypes.object.isRequired,
	displayCoins: PropTypes.array.isRequired,
	displayBalances: PropTypes.bool.isRequired,
};

export default withStyles(styles)(InterfaceWrapper)