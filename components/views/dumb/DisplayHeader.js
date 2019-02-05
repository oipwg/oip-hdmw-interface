import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from "@material-ui/core";

import styles from '../../../styles/views/dumb/DisplayHeader'

function DisplayHeader(props) {
	const {classes, setActiveView, activeView} = props
	
	return <div className={classes.displayHeader}>
		<span
			onClick={() => setActiveView('addresses')}
			className={classes.viewLink}>Addresses
		</span>
		<span
			onClick={() => setActiveView('transactions')}
			className={classes.viewLink}>Transactions
		</span>
		<span
			onClick={() => setActiveView('send')}
			className={classes.viewLink}>Send
		</span>
		<span
			onClick={() => setActiveView('settings')}
			className={classes.viewLink}>Settings
		</span>
	</div>
}

DisplayHeader.propTypes = {
	classes: PropTypes.object.isRequired,
	//actions
	setActiveView: PropTypes.func.isRequired,
	//state
	activeView: PropTypes.string.isRequired,
}

export default withStyles(styles)(DisplayHeader)