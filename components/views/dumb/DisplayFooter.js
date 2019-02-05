import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from "@material-ui/core";

import styles from '../../../styles/views/dumb/DisplayFooter'

function DisplayFooter(props) {
	const {classes} = props
	return <div className={classes.displayFooter}>
		{/**/}
	</div>
}

DisplayFooter.propTypes = {
	classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(DisplayFooter)