import React from 'react'
import Head from 'next/head';
import PropTypes from 'prop-types';
import {Wallet} from 'oip-hdmw'
import {withTheme, withStyles} from '@material-ui/core/styles';

//styles
import withLayout from '../lib/withLayout';
import IndexStyles from '../components/styles/IndexStyles'
//initial load page
import LoadForm from '../components/IndexPage/LoadForm'
//wallet
import RenderWallet from '../components/IndexPage/Wallet'

class Index extends React.Component {
	constructor(props) {
		super(props)

		this.Wallet = new Wallet("abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about", {discover: false})

		this.state = {
			walletLoaded: true, //toDo set to false and wipe mnemonic above
			discover: false,

			activeCoinName: 'bitcoin',
			activeAccountIndex: 0,
			activeChainIndex: 0,
			activeAddressIndex: 0,

			activeCoin: this.Wallet ? this.Wallet.getCoin('bitcoin') : undefined,
			activeAccount: undefined,
			activeChain: undefined,
			activeAddress: undefined,

			numOfAccountsToShow: 1,
			numOfAddressesToShow: 1,
			
			detailsView: 'addresses',
		}
	}

	handleCoinCardClick = (coin) => {
		let Coin = this.Wallet.getCoin(coin)
		let resetAccountIndex = 0
		let Account = Coin.getAccount(resetAccountIndex)
		this.setState({
			activeCoinName: coin,
			activeCoin: Coin,
			activeAccountIndex: resetAccountIndex,
			activeAccount: Account,
		})
	}
	
	handleAccountClick = (Account, i) => {
		this.setState({
			activeAccountIndex: i,
			activeAccount: Account
		})
	}

	handleAddCoin = () => {
		console.log('this function is not yet available')
	}
	
	handleAddAccount = () => {
		if (this.state.numOfAccountsToShow === 12) {
			return
		}
		this.setState({numOfAccountsToShow: this.state.numOfAccountsToShow + 1})
	}

	loadWallet = (mnemonic) => {
		this.Wallet = new Wallet(mnemonic, {discover: false})
		this.setState({
			walletLoaded: true,
			activeCoinName: 'bitcoin',
			activeAccountIndex: 0,
			activeChainIndex: 0,
			activeAddressIndex: 0,
		})
	}
	
	setDetailsView =(view) => {
		if (view === 'addresses' || view === 'transactions') {
			this.setState({detailsView: view})
		} else {
			throw new Error(`Invalid string passed to setDetailsView`)
		}
	}
	
	renderWallet = (classes) => {
		let props = {
			classes,
			wallet: this.Wallet,
			state: this.state,
			fn: {
				handleCoinCardClick: this.handleCoinCardClick,
				handleAccountClick: this.handleAccountClick,
				handleAddCoin: this.handleAddCoin,
				handleAddAccount: this.handleAddAccount,
				setDetailsView: this.setDetailsView,
			}
		}
		return RenderWallet(props)
	}

	renderIntro = () => {
		return <LoadForm loadWallet={this.loadWallet} />
	}

	renderPage = (classes) => {
		if (this.state.walletLoaded) {
			return this.renderWallet(classes)
		} else {
			return this.renderIntro()
		}
	}

	render() {
		const {classes} = this.props
		return (
			<div className={classes.contentContainer}>
				<Head>
					<title>OIP-HDMW</title>
					<meta name="description" content="Open Index Protocol HD Multi Wallet"/>
				</Head>
				{this.renderPage(classes)}
			</div>
		)
	}
}

Index.getInitialProps = ({ reduxStore, req }) => {
	const isServer = !!req
	console.log('Index.getInitialProps', isServer, reduxStore)
	
	return {}
}

Index.propTypes = {
	classes: PropTypes.object.isRequired,
};

let component = withStyles(IndexStyles)(Index)
component = withTheme()(component)
component = withLayout(component)

export default component