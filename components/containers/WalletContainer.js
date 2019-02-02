import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {Wallet} from "oip-hdmw";

import {withStyles} from "@material-ui/core";
import {setActiveCoin} from '../../redux/actions/Interface/creators'
import {updateBalances} from '../../redux/actions/HDMW/thunks'

//styles
import InterfaceStyles from '../../styles/WalletInterface'
import WalletInterface from "../views/WalletInterface";

class WalletContainer extends React.Component {
	constructor(props) {
		super(props)
		console.log('WalletContainer.constructor')
		
		this.Wallet = props.HDMW.mnemonic ? new Wallet(props.HDMW.mnemonic, {discover: false}) : undefined
	}
	
	componentDidMount() {
		console.log('WalletContainer.componentDidMount')
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
		const {classes, Interface, setActiveCoin, updateBalances, HDMW, Settings} = this.props;
		
		return <WalletInterface
			//hdmw
			Wallet={this.Wallet}
			//jss
			classes={classes}
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
	updateBalances
}

const mapStateToProps = (state) => {
	return {
		Interface: state.Interface,
		Settings: state.Settings,
		HDMW: state.HDMW,
	}
}

WalletContainer.propTypes = {
	//jss
	classes: PropTypes.object.isRequired,
	//store
	Interface: PropTypes.object.isRequired,
	Settings: PropTypes.object.isRequired,
	HDMW: PropTypes.object.isRequired,
	//actions
	setActiveCoin: PropTypes.func.isRequired,
};

let component = withStyles(InterfaceStyles)(WalletContainer) //jss-css
component = connect(mapStateToProps, mapDispatchToProps)(component) //redux

export default component
