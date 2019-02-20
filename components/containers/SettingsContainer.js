import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles';

import SettingsWrapper from '../views/wrappers/SettingsWrapper'
import styles from '../../styles/views/dumb/Settings'
import {setExplorerUrls, displayBalances} from "../../redux/actions/Settings/creators";
import {toggleTestnetCoins, displayCoin} from "../../redux/actions/Settings/thunks";

class SettingsContainer extends React.Component {
	render() {
		return <SettingsWrapper
			classes={this.props.classes}
			Interface={this.props.Interface}
			Settings={this.props.Settings}
			Wallet={this.props.Wallet}
			setExplorerUrls={this.props.setExplorerUrls}
			displayBalances={this.props.displayBalances}
			displayCoin={this.props.displayCoin}
			toggleTestnetCoins={this.props.toggleTestnetCoins}
			includeTestnetCoins={this.props.Settings.includeTestnetCoins}
			defaultExplorerUrls={this.props.Settings.defaultExplorerUrls}
		/>
	}
}

const mapDispatchToProps = {
	setExplorerUrls,
	toggleTestnetCoins,
	displayBalances,
	displayCoin,
}

const mapStateToProps = (state) => {
	return {
		Interface: state.Interface,
		Settings: state.Settings,
	}
}

SettingsContainer.propTypes = {
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
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SettingsContainer))