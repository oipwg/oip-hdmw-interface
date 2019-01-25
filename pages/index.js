import React from 'react'
import Head from 'next/head';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
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
	componentDidMount() {
		console.log('Index.componentDidMount')
		this.props.fetchAndSetBalances()
	}
	
	render() {
		// console.log('Index.render')
		const {
			classes,
			Interface,
			Settings,
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
				<WalletInterface Interface={Interface} Settings={Settings} classes={classes}  actions={actions}/>
			</div>
		)
	}
}

const mapDispatchToProps = {}
for (let actionStore in _actions) {
	for (let action in _actions[actionStore]) {
		if (_.isFunction(_actions[actionStore][action])) {
			mapDispatchToProps[action] = _actions[actionStore][action]
		}
	}
}

const mapStateToProps = (state) => {
	return {
		Interface: state.Interface,
		Settings: state.Settings
	}
}

Index.getInitialProps = ({reduxStore, res}) => {
	// console.log('Index.getInitialProps')
	const state = reduxStore.getState()
	const {Interface} = state //state.Wallet is a default property
	if (res && !Interface.wallet) {
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
	//actions
	fetchAndSetBalances: PropTypes.func.isRequired,
	setActiveAccountIndex: PropTypes.func.isRequired,
	setActiveAddressIndex: PropTypes.func.isRequired,
	setActiveChainIndex: PropTypes.func.isRequired,
	setActiveCoin: PropTypes.func.isRequired,
	increaseAccountCount: PropTypes.func.isRequired,
	increaseAddressCount: PropTypes.func.isRequired,
	setDisplayView: PropTypes.func.isRequired,
	showTestnetCoins: PropTypes.func.isRequired,
	handleTestnetCoins: PropTypes.func.isRequired,
};

let component = withStyles(InterfaceStyles)(Index) //jss-css
component = withTheme()(component) //jss-css
component = withLayout(component) //hoc
component = connect(mapStateToProps, mapDispatchToProps)(component) //redux

export default component