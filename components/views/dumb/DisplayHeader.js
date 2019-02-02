import React from 'react'
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

export default withStyles(styles)(DisplayHeader)