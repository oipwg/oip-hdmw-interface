import React from 'react'
import Head from 'next/head';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {Wallet} from 'oip-hdmw'
import {withTheme, withStyles} from '@material-ui/core/styles';
import _ from 'lodash'

//styles
import withLayout from '../lib/withLayout';
import InterfaceStyles from '../styles/WalletInterface'
//wallet
import WalletInterface from '../components/WalletInterface'
//actions/thunks
import * as _actions from '../redux/actions'

class Index extends React.Component {
	constructor(props) {
		super(props)
	
		this.Wallet = props.HDMW.mnemonic ? new Wallet(props.HDMW.mnemonic, {discover: props.HDMW.discover}) : undefined
		
	}
	componentDidMount() {
		console.log('Index.componentDidMount')
		this.props.updateBalances(this.Wallet)
	}
	componentDidUpdate(prevProps) {
		//check if new wallet needs to be created
		if (this.props.HDMW.mnemonic !== prevProps.HDMW.mnemonic) {
			this.Wallet = new Wallet(this.props.HDMW.mnemonic, {discover: this.props.HDMW.discover})
			this.props.updateBalances(this.Wallet)
		}
		//check if new coin were added
		let newCoinsAdded = false
		for (let coin of Object.keys(this.Wallet)) {
			if (!this.props.Interface[coin]) {
				newCoinsAdded = true
				break
			}
		}
		//if there were, create initial interface states for them
		if (newCoinsAdded) {
			this.props.createInitialCoinStates(this.Wallet)
		}
		//if the activeCoin is stale, default it to flo
		if (!this.Wallet.getCoin(this.props.Interface.activeCoinName)) {
			this.props.setActiveCoin('flo')
		}
	}
	
	render() {
		// console.log('Index.render')
		const {
			classes,
			Interface,
			Settings,
			HDMW,
			theme,
			pageContext,
			...actions
		} = this.props
		
		return (
			<div className={classes.contentContainer}>
				<Head>
					<title>oip-hdmw</title>
					<meta name="description" content="Open Index Protocol HD Multi Wallet"/>
				</Head>
				<WalletInterface
					//redux store
					Interface={Interface}
					Settings={Settings}
					HDMW={HDMW}
					//redux actions
					actions={actions}
					//oip-hdmw
					Wallet={this.Wallet}
					//jss classes
					classes={classes}  />
			</div>
		)
	}
}

const mapDispatchToProps = {}
for (let actionStore in _actions) {
	// noinspection JSUnfilteredForInLoop
	for (let action in _actions[actionStore]) {
		if (_.isFunction(_actions[actionStore][action])) {
			mapDispatchToProps[action] = _actions[actionStore][action]
		}
	}
}

const mapStateToProps = (state) => {
	return {
		Interface: state.Interface,
		Settings: state.Settings,
		HDMW: state.HDMW,
	}
}

Index.getInitialProps = ({reduxStore, res}) => {
	// console.log('Index.getInitialProps')
	const state = reduxStore.getState()
	const {HDMW} = state
	if (res && !HDMW.mnemonic) {
		res.redirect('/load')
	}
	
	return {}
}

Index.propTypes = {
	//jss
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
	pageContent: PropTypes.object,
	//store
	Interface: PropTypes.object.isRequired,
	Settings: PropTypes.object.isRequired,
	HDMW: PropTypes.object.isRequired,
	//actions
	fetchAndSetBalances: PropTypes.func.isRequired,
	fetchAndSetExchangeRates: PropTypes.func.isRequired,
	setActiveAccountIndex: PropTypes.func.isRequired,
	setActiveAddressIndex: PropTypes.func.isRequired,
	setActiveChainIndex: PropTypes.func.isRequired,
	setActiveCoin: PropTypes.func.isRequired,
	increaseAccountCount: PropTypes.func.isRequired,
	increaseAddressCount: PropTypes.func.isRequired,
	setDisplayView: PropTypes.func.isRequired,
	toggleTestnetCoins: PropTypes.func.isRequired,
	updateBalances: PropTypes.func.isRequired,
	createInitialCoinStates: PropTypes.func.isRequired,
	displayBalances: PropTypes.func.isRequired,
};

let component = withStyles(InterfaceStyles)(Index) //jss-css
component = withTheme()(component) //jss-css
component = withLayout(component) //hoc
component = connect(mapStateToProps, mapDispatchToProps)(component) //redux

export default component