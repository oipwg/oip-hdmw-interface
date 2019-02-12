import React from 'react'
import PropTypes from 'prop-types'
import ReactLoader from '../../../shared/ReactLoader'
import notifier from "../../../../lib/notifier";

function CreateTXHeader(props) {
	const {classes} = props
	
	const state = props.sendPaymentAsyncState
	
	let text, loader = null
	
	if (state.fetching) {
		text = <span style={{color: 'blue', marginRight: '5px', fontWeight: 'bold'}}>Sending</span>
		loader = <ReactLoader type={'BarLoader'} size={7}/>
	} else if (state.error) {
		text = <span style={{color: 'red', fontWeight: 'bold'}}>Error</span>
		notifier(`There was an error processing transactions`)
	} else if (state.success) {
		text = <span style={{color: 'green', fontWeight: 'bold'}}>Success</span>
	} else {
		text = <h4>Send TX</h4>
	}
	
	return <div className={classes.createTXHeader}>
		{text}
		{loader}
	</div>
}

CreateTXHeader.propTypes = {
	classes: PropTypes.object.isRequired,
	sendPaymentAsyncState: PropTypes.object.isRequired,
}

export default CreateTXHeader