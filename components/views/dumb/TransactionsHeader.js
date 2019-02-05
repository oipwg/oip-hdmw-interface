import React from 'react'
import PropTypes from 'prop-types'

function TransactionsHeader(props) {
	const {classes} = props
	return <div className={classes.transactionsHeader}>
		Transactions
	</div>
}

TransactionsHeader.propTypes = {
	classes: PropTypes.object.isRequired,
}
export default TransactionsHeader