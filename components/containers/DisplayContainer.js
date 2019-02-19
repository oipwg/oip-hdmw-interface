import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import DisplayWrapper from "../views/wrappers/DisplayWrapper";
import AddressContainer from "./AddressContainer"
import SettingsContainer from './SettingsContainer'
import TransactionsContainer from './TransactionsContainer'
import CreateTXContainer from './CreateTXContainer'

//Interface actions
import {setActiveView, increaseAddressCount} from '../../redux/actions/Interface/creators'

function DisplayContainer(props) {
	
	const getDisplayBody = (props) => {
		switch (props.Interface.activeView) {
			case 'addresses':
				return <AddressContainer
					Interface={props.Interface}
					Wallet={props.Wallet}
					increaseAddressCount={props.increaseAddressCount}
				/>
			case 'transactions':
				return <TransactionsContainer Wallet={props.Wallet}/>
			case 'send':
				return <CreateTXContainer Wallet={props.Wallet}/>
			// case 'add_coin':
			// // return <RenderAddCoinView actions={actions} Interface={Interface}/>
			case 'settings':
				return <SettingsContainer Wallet={props.Wallet}/>
			default:
				return 'Invalid Display View'
		}
	}
	
	
	return <DisplayWrapper
		setActiveView={props.setActiveView}
		activeView={props.Interface.activeView}
		DisplayBody={getDisplayBody(props)}
	/>
	
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