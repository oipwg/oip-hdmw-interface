import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import DisplaySettings from '../dumb/DisplaySettings'
//styles
import styles from '../../../styles/views/dumb/Settings'
import APISettings from "../dumb/APISettings";
import SaveSettings from "../dumb/SaveSettings";

class SettingsWrapper extends React.Component {
	render() {
		console.log('Settings.render')
		const {classes} = this.props
		
		return (
			<div className={classes.settingsWrapper}>
				<div className={classes.settingsContainer}>
					<DisplaySettings
						Settings={this.props.Settings}
						displayCoins={this.props.Settings.displayCoins}
						displayCoin={this.props.displayCoin}
						toggleBalances={this.props.displayBalances}
						displayBalances={this.props.Settings.displayBalances}
						toggleTestnetCoins={this.props.toggleTestnetCoins}
						includeTestnetCoins={this.props.includeTestnetCoins}
						Wallet={this.props.Wallet}
						classes={classes}
					/>
					<div className={classes.sectionDivider}/>
					<APISettings
						displayCoins={this.props.Settings.displayCoins}
						explorerUrls={this.props.Settings.explorerUrls}
						classes={classes}
						setExplorerUrls={this.props.setExplorerUrls}
						defaultExplorerUrls={this.props.defaultExplorerUrls}
					/>
					<div className={classes.sectionDivider}/>
					<SaveSettings
						classes={classes}
						Settings={this.props.Settings}
					/>
				</div>
			</div>
		)
	}
}

SettingsWrapper.propTypes = {
	//jss
	classes: PropTypes.object.isRequired,
	//store
	Interface: PropTypes.object.isRequired,
	Settings: PropTypes.object.isRequired,
	//wallet
	Wallet: PropTypes.object.isRequired,
	//actions
	setExplorerUrls: PropTypes.func.isRequired,
	displayBalances: PropTypes.func.isRequired,
	toggleTestnetCoins: PropTypes.func.isRequired,
	displayCoin: PropTypes.func.isRequired,
	defaultExplorerUrls: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingsWrapper)