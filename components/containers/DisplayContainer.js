import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import {withStyles} from "@material-ui/core";
import InterfaceStyles from '../../styles/WalletInterface'

import RenderAddressSection from "../views/Addresses"
import RenderSendView from '../views/Send'
import RenderSettingsView from '../views/Settings'
import RenderTransactionView from '../views/Transactions'
import DisplayInterface from "../views/DisplayInterface";

//action
import {setActiveView, increaseAddressCount} from '../../redux/actions/Interface/creators'

class DisplayContainer extends React.Component {
	getDisplayBody = (props) => {
		const {classes, Interface, Wallet, increaseAddressCount} = props
		
		switch (this.props.Interface.activeView) {
			case 'addresses':
				return RenderAddressSection({classes, Interface, Wallet, increaseAddressCount})
			// case 'transactions':
			// 	return <RenderTransactionView
			// 		{/*{...props} */}
			// 	/>
			// case 'send':
			// 	return <RenderSendView
			// 		{/*{...props}*/}
			// 	/>
			// case 'add_coin':
			// // return <RenderAddCoinView actions={actions} Interface={Interface}/>
			// case 'settings':
			// 	return <RenderSettingsView
			// 		// actions={actions}
			// 		// Interface={Interface}
			// 		// Settings={Settings}
			// 		// Wallet={Wallet}
			// 	/>
			default:
				return 'Invalid Display View'
		}
	}
	render() {
		return <DisplayInterface
			classes={this.props.classes}
			setActiveView={this.props.setActiveView}
			activeView={this.props.Interface.activeView}
			DisplayBody={this.getDisplayBody(this.props)}
		/>
	}
}

const mapDispatchToProps = {
	setActiveView,
	increaseAddressCount
}

const mapStateToProps = (state) => {
	return {
		Interface: state.Interface,
		Settings: state.Settings,
		HDMW: state.HDMW,
	}
}

DisplayContainer.propTypes = {
	//jss
	classes: PropTypes.object.isRequired,
	//store
	Interface: PropTypes.object.isRequired,
	Settings: PropTypes.object.isRequired,
	HDMW: PropTypes.object.isRequired,
	//actions
	setActiveView: PropTypes.func.isRequired,
	increaseAddressCount: PropTypes.func.isRequired,
};

let component = withStyles(InterfaceStyles)(DisplayContainer) //jss-css
component = connect(mapStateToProps, mapDispatchToProps)(component) //redux

export default component