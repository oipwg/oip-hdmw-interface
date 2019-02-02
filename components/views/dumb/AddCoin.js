import React from 'react';
import {withStyles} from '@material-ui/core/styles';

//styles
import styles from '../../../styles/views/dumb/AddCoin'

class AddCoin extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {}
	}
	
	render() {
		const {classes} = this.props
		return (
			<div className={classes.addCoinWrapper}>
			
			</div>
		)
	}
}

export default withStyles(styles)(AddCoin)