import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from "@material-ui/core";

import TransactionsHeader from '../dumb/TransactionsHeader'
import Transactions from '../dumb/Transactions'
import ReactLoader from '../../shared/ReactLoader'

import styles from '../../../styles/views/dumb/Transactions'

function TransactionsWrapper(props) {
	const {classes, transactions, Wallet, activeCoin, coinState} = props
	
	return <div className={classes.transactionsContainer}>
		<TransactionsHeader
			classes={classes}
			refreshTransactions={props.refreshTransactions}
		/>
		{transactions && transactions.length > 0 ? <Transactions
			classes={classes}
			transactions={transactions}
			Wallet={Wallet}
			activeCoin={activeCoin}
			coinState={coinState}
			usedPubAddresses={props.usedPubAddresses}
		/> : <div className={classes.reactLoaderContainer}>
			{ReactLoader()}
		</div>
		}
	</div>
}

TransactionsWrapper.propTypes = {
	classes: PropTypes.object.isRequired,
	activeCoin: PropTypes.string.isRequired,
	coinState: PropTypes.object.isRequired,
	Wallet: PropTypes.object.isRequired,
	usedPubAddresses: PropTypes.array.isRequired,
	refreshTransactions: PropTypes.func.isRequired,
}

export default withStyles(styles)(TransactionsWrapper)