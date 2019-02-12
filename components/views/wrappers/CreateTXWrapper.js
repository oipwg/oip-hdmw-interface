import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from "@material-ui/core";

import styles from '../../../styles/views/wrappers/CreateTXWrapper'
import CreateTX from '../dumb/CreateTX/CreateTX'
import CreateTXHeader from '../dumb/CreateTX/CreateTXHeader'

function CreateTXWrapper(props) {
	const {classes} = props
	
	return <div className={classes.createTXContainer}>
		<CreateTXHeader
			classes={classes}
			sendPaymentAsyncState={props.sendPaymentAsyncState}
	/>
		<CreateTX
			Wallet={props.Wallet}
			handleSendClick={props.handleSendClick}
			activeCoin={props.activeCoin}
			classes={classes}
			clearSendPaymentAsyncState={props.clearSendPaymentAsyncState}
		/>
	</div>
}

CreateTXWrapper.propTypes = {
	classes: PropTypes.object.isRequired,
	Wallet: PropTypes.object.isRequired,
	activeCoin: PropTypes.string.isRequired,
	handleSendClick: PropTypes.func.isRequired,
	sendPaymentAsyncState: PropTypes.object.isRequired,
	clearSendPaymentAsyncState: PropTypes.func.isRequired,
}

export default withStyles(styles)(CreateTXWrapper)