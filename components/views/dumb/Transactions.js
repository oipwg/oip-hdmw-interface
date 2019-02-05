import React from "react";
import PropTypes from 'prop-types'
import moment from 'moment';

function Transactions(props) {
	console.log("Transactions.render")
	const {classes} = props
	
	return <div className={classes.transactionsListContainer}>
		{props.transactions.map(tx => {
			return <div key={tx.txid} className={classes.transactionRow}>
				{tx.txid}
			</div>
		})}
	</div>
}

Transactions.propTypes = {
	classes: PropTypes.object.isRequired,
	transactions: PropTypes.array.isRequired,
}

export default Transactions