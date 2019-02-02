import React from 'react'
import {withStyles} from "@material-ui/core";

import DisplayHeader from '../dumb/DisplayHeader'
import DisplayFooter from '../dumb/DisplayFooter'

import styles from '../../../styles/views/wrappers/DisplayWrapper'

function DisplayWrapper(props) {
	const {classes, DisplayBody, setActiveView, activeView} = props
	
	return <div className={classes.displayContainer}>
		<DisplayHeader
			setActiveView={setActiveView}
			activeView={activeView}
		/>
		<div className={classes.displayBodyWrapper}>
			<div className={classes.displayBodyLayout}>
				<div className={classes.displayBody}>
					{DisplayBody}
				</div>
			</div>
		</div>
		<DisplayFooter/>
	</div>
}

export default withStyles(styles)(DisplayWrapper)