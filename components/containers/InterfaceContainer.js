import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {Wallet} from "oip-hdmw";
import _ from 'lodash'
import {setActiveCoin} from '../../redux/actions/Interface/creators'
import {createInitialCoinStates} from '../../redux/actions/Interface/thunks'
import {updateBalances} from '../../redux/actions/HDMW/thunks'
import {initializeCoinNetworkApiUrls} from '../../redux/actions/Settings/thunks'

import InterfaceWrapper from "../views/wrappers/InterfaceWrapper";

class InterfaceContainer extends React.Component {
	constructor(props) {
		super(props)
		console.log('WalletContainer.constructor')
		
		//loadFromLocalStorage
		this.Wallet = props.HDMW.mnemonic ? new Wallet(props.HDMW.mnemonic, {discover: false}) : undefined
		
	}
	
	componentDidMount() {
		console.log('WalletContainer.componentDidMount')
		//initialize wallet
		if (this.props.Settings.toggleTestnetCoins) {
			this.Wallet.addTestnetCoins()
		}
		
		//if custom networks add coins --ToDo much later
		
		//if custom coin api urls, set
		if (_.isEmpty(this.props.Settings.coinNetworkApiUrls)) {
			//set coin network apis from wallet with defaults
			this.props.initializeCoinNetworkApiUrls(this.Wallet)
		} else {
			//set wallet with coinNetworkApis
			this.Wallet.setNetworkApis(this.props.Settings.coinNetworkApiUrls)
		}
		
		//initialize interface
		//else run this anyways in case they missed something
		this.props.createInitialCoinStates(this.Wallet)
		//if custom coin states, override initial states
		//todo: override initial coin states if custom Interface settings
		
		//fetch balances for all coins available
		// this.props.updateBalances(this.Wallet) //toDo: uncomment
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('WalletContainer.componentDidUpdate')
		
		if (prevProps.Settings.toggleTestnetCoins !== this.props.Settings.toggleTestnetCoins) {
			this.Wallet.addTestnetCoins(this.props.Settings.toggleTestnetCoins)
		}
	}
	
	render() {
		console.log('WalletContainer.render')
		const {Interface, setActiveCoin, updateBalances, HDMW, Settings} = this.props;
		
		return <InterfaceWrapper
			//hdmw
			Wallet={this.Wallet}
			//states
			activeCoin={Interface.activeCoin}
			displayCoins={Interface.displayCoins}
			balances={HDMW.balances}
			totalBalance={HDMW.totalBalance}
			exchangeRates={HDMW.exchangeRates}
			displayBalances={Settings.displayBalances}
			//actions
			setActiveCoin={setActiveCoin}
			updateBalances={updateBalances}
		/>
	}
}

const mapDispatchToProps = {
	setActiveCoin,
	updateBalances,
	initializeCoinNetworkApiUrls,
	createInitialCoinStates,
}

const mapStateToProps = (state) => {
	return {
		Interface: state.Interface,
		Settings: state.Settings,
		HDMW: state.HDMW,
	}
}

InterfaceContainer.propTypes = {
	//store
	Interface: PropTypes.object.isRequired,
	Settings: PropTypes.object.isRequired,
	HDMW: PropTypes.object.isRequired,
	//actions
	setActiveCoin: PropTypes.func.isRequired,
	initializeCoinNetworkApiUrls: PropTypes.func.isRequired,
	createInitialCoinStates: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(InterfaceContainer)
