import React from 'react'
import PropTypes from 'prop-types'
import {Refresh} from "@material-ui/icons";

function TransactionsHeader(props) {
	const {classes} = props
	return <div className={classes.transactionsHeader}>
		<Refresh
			className={classes.refreshTransactions}
			onClick={props.refreshTransactions}
		/>
	</div>
}

TransactionsHeader.propTypes = {
	classes: PropTypes.object.isRequired,
	refreshTransactions: PropTypes.func.isRequired,
}
export default TransactionsHeader