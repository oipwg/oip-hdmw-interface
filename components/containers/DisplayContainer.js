import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import DisplayWrapper from "../views/wrappers/DisplayWrapper";
import RenderAddresses from "../views/dumb/Addresses"
import SettingsContainer from './SettingsContainer'
import RenderSendView from '../views/dumb/Send'
import RenderTransactionView from '../views/dumb/Transactions'

//Interface actions
import {setActiveView, increaseAddressCount} from '../../redux/actions/Interface/creators'
//Settings actions/thunks
import {setExplorerUrls, displayBalances} from "../../redux/actions/Settings/creators";
import {displayCoin, toggleTestnetCoins} from '../../redux/actions/Settings/thunks'

class DisplayContainer extends React.Component {
	getDisplayBody = (props) => {
		const {Interface} = props
		
		switch (this.props.Interface.activeView) {
			case 'addresses':
				return <RenderAddresses
					Interface={Interface}
					Wallet={this.props.Wallet}
					increaseAddressCount={this.props.increaseAddressCount}
				/>
			
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
			case 'settings':
				return <SettingsContainer Wallet={this.props.Wallet}/>
			default:
				return 'Invalid Display View'
		}
	}
	
	render() {
		return <DisplayWrapper
			setActiveView={this.props.setActiveView}
			activeView={this.props.Interface.activeView}
			DisplayBody={this.getDisplayBody(this.props)}
		/>
	}
}

const mapDispatchToProps = {
	setActiveView,
	increaseAddressCount,
}

const mapStateToProps = (state) => {
	return {
		Interface: state.Interface,
	}
}

DisplayContainer.propTypes = {
	//store
	Interface: PropTypes.object.isRequired,
	//actions
	setActiveView: PropTypes.func.isRequired,
	increaseAddressCount: PropTypes.func.isRequired,
	//wallet
	Wallet: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer)