import React from 'react';
import {withStyles} from '@material-ui/core/styles';

//styles
import styles from '../../styles/Settings'

class Settings extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {}
	}
	
	render() {
		const {classes} = this.props
		return (
			<div className={classes.settingsWrapper}>
			
			</div>
		)
	}
}

export default withStyles(styles)(Settings)