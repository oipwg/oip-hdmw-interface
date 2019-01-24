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
		const {classes, actions} = this.props
		return (
			<div className={classes.settingsContainer}>
				<div className={classes.settingsHeader}>
					<h4 className={classes.settingsHeaderTitle}>
						Settings
					</h4>
				</div>
				<div className={classes.settingsBody}>
					<div className={classes.coinSettings}>
					
					</div>
					<div className={classes.apiSettings}>
					
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Settings)