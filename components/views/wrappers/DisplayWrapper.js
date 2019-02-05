import React from 'react'
import PropTypes from 'prop-types'
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

DisplayWrapper.propTypes = {
	classes: PropTypes.object.isRequired,
	setActiveView: PropTypes.func.isRequired,
	activeView: PropTypes.string.isRequired,
	DisplayBody: PropTypes.object.isRequired,
}

export default withStyles(styles)(DisplayWrapper)