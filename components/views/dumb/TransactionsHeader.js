import React from 'react'
import PropTypes from 'prop-types'
import {Refresh} from "@material-ui/icons";
import ReactLoader from '../../shared/ReactLoader'

const getTxInfoText = (txLen, asyncState) => {
	let el, loader = null
	if (asyncState.fetching) {
		el = <h4 style={{color: 'blue'}}>LOADING</h4>
		loader = <ReactLoader type={'BeatLoader'} size={5}/>
	} else if (asyncState.error) {
		el = <h4 style={{color: 'red'}}>ERROR FETCHING NEW TRANSACTIONS</h4>
	} else {
		//success
		el = null
	}
	
	return {el, loader}
}

function TransactionsHeader(props) {
	const {classes} = props
	const {el, loader} = getTxInfoText(props.transactionsLen, props.transactionsAsyncState)
	return <div className={classes.transactionsHeader}>
		<div className={classes.txAsyncData}>
			{el}
			{loader}
		</div>
		<Refresh
			className={classes.refreshTransactions}
			onClick={props.refreshTransactions}
		/>
	</div>
}

TransactionsHeader.propTypes = {
	classes: PropTypes.object.isRequired,
	refreshTransactions: PropTypes.func.isRequired,
	transactionsAsyncState: PropTypes.object.isRequired,
	transactionsLen: PropTypes.number.isRequired,
}
export default TransactionsHeader