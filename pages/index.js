import React from 'react'
import Head from 'next/head';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {withTheme, withStyles} from '@material-ui/core/styles';

//styles
import withLayout from '../lib/withLayout';
import InterfaceStyles from '../styles/WalletInterface'
//wallet
import WalletInterface from '../components/WalletInterface'
//actions/thunks
import {
	fetchAndSetBalances,
	setDetailView,
	setActiveAccountIndex,
	setActiveAddressIndex,
	setActiveChainIndex,
	setActiveCoin,
	increaseAccountCount,
	increaseAddressCount,
	setDisplayView
} from '../redux/actions/Interface'

class Index extends React.Component {
	componentDidMount() {
		console.log('Index.componentDidMount')
		this.props.fetchAndSetBalances()
	}
	
	render() {
		// console.log('Index.render')
		const {
			classes,
			setDetailView,
			setActiveAccountIndex,
			setActiveAddressIndex,
			setActiveChainIndex,
			setActiveCoin,
			increaseAccountCount,
			increaseAddressCount,
			setDisplayView,
			Interface,
			fetchAndSetBalances,
		} = this.props
		
		let actions = {
			fetchAndSetBalances,
			setDetailView,
			setActiveAccountIndex,
			setActiveAddressIndex,
			setActiveChainIndex,
			setActiveCoin,
			setDisplayView,
			increaseAccountCount,
			increaseAddressCount,
		}
		
		return (
			<div className={classes.contentContainer}>
				<Head>
					<title>oip-hdmw</title>
					<meta name="description" content="Open Index Protocol HD Multi Wallet"/>
				</Head>
				<WalletInterface Interface={Interface} classes={classes}  actions={actions}/>
			</div>
		)
	}
}

const mapDispatchToProps = {
	fetchAndSetBalances,
	setDetailView,
	setActiveAccountIndex,
	setActiveAddressIndex,
	setActiveChainIndex,
	setActiveCoin,
	increaseAccountCount,
	increaseAddressCount,
	setDisplayView
}

const mapStateToProps = (state) => {
	return {
		Interface: state.Interface
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
	classes: PropTypes.object.isRequired,
	Interface: PropTypes.object.isRequired,
	fetchAndSetBalances: PropTypes.func.isRequired,
	setDetailView: PropTypes.func.isRequired,
	setActiveAccountIndex: PropTypes.func.isRequired,
	setActiveAddressIndex: PropTypes.func.isRequired,
	setActiveChainIndex: PropTypes.func.isRequired,
	setActiveCoin: PropTypes.func.isRequired,
	increaseAccountCount: PropTypes.func.isRequired,
	increaseAddressCount: PropTypes.func.isRequired,
	setDisplayView: PropTypes.func.isRequired,
};

let component = withStyles(InterfaceStyles)(Index) //jss-css
component = withTheme()(component) //jss-css
component = withLayout(component) //hoc
component = connect(mapStateToProps, mapDispatchToProps)(component) //redux

export default component