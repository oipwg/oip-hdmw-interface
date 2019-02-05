import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from "@material-ui/core";

import TransactionsHeader from '../dumb/TransactionsHeader'
import Transactions from '../dumb/Transactions'

import styles from '../../../styles/views/dumb/Transactions'

function TransactionsWrapper(props) {
	const {classes, transactions, Wallet, activeCoin, coinState} = props
	
	return <div className={classes.transactionsContainer}>
		<TransactionsHeader
			classes={classes}
		/>
		<Transactions
			classes={classes}
			transactions={transactions}
			Wallet={Wallet}
			activeCoin={activeCoin}
			coinState={coinState}
		/>
	</div>
}

TransactionsWrapper.propTypes = {
	classes: PropTypes.object.isRequired,
	activeCoin: PropTypes.string.isRequired,
	coinState: PropTypes.object.isRequired,
	Wallet: PropTypes.object.isRequired,
}

export default withStyles(styles)(TransactionsWrapper)