import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import DisplayWrapper from "../views/wrappers/DisplayWrapper";
import RenderAddresses from "../views/dumb/Addresses"
import RenderSendView from '../views/dumb/Send'
import RenderTransactionView from '../views/dumb/Transactions'
import RenderSettings from '../views/dumb/Settings'

//Interface actions
import {setActiveView, increaseAddressCount} from '../../redux/actions/Interface/creators'
//Settings actions/thunks
import {setCoinNetworkApis, toggleTestnetCoins, displayBalances} from "../../redux/actions/Settings/creators";
import {displayCoin} from '../../redux/actions/Settings/thunks'

class DisplayContainer extends React.Component {
	getDisplayBody = (props) => {
		const {Interface, Wallet, Settings} = props
		
		switch (this.props.Interface.activeView) {
			case 'addresses':
				return <RenderAddresses
					Interface={Interface}
					Wallet={Wallet}
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
				return <RenderSettings
					Interface={Interface}
					Wallet={Wallet}
					Settings={Settings}
					setCoinNetworkApis={this.props.setCoinNetworkApis}
					toggleTestnetCoins={this.props.toggleTestnetCoins}
					addDisplayCoin={this.props.displayCoin}
					displayBalances={this.props.displayBalances}
				/>
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
	setCoinNetworkApis,
	displayBalances,
	displayCoin,
	toggleTestnetCoins
}

const mapStateToProps = (state) => {
	return {
		Interface: state.Interface,
		Settings: state.Settings,
		HDMW: state.HDMW,
	}
}

DisplayContainer.propTypes = {
	//store
	Interface: PropTypes.object.isRequired,
	Settings: PropTypes.object.isRequired,
	HDMW: PropTypes.object.isRequired,
	//actions
	setActiveView: PropTypes.func.isRequired,
	increaseAddressCount: PropTypes.func.isRequired,
	setCoinNetworkApis: PropTypes.func.isRequired,
	toggleTestnetCoins: PropTypes.func.isRequired,
	displayCoin: PropTypes.func.isRequired,
	displayBalances: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer)