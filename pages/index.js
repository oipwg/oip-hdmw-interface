import React from 'react'
import Head from 'next/head';
import PropTypes from 'prop-types';
import {Wallet} from 'oip-hdmw'
import {withTheme, withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

//styles
import withLayout from '../lib/withLayout';
import IndexStyles from '../components/styles/IndexStyles'
//initial load page
import LoadForm from '../components/IndexPage/LoadForm'
//sections
import renderTxSection from '../components/IndexPage/sections/TxSection'
import renderAccountSection from '../components/IndexPage/sections/AccountSection'
import RenderCoinSection from '../components/IndexPage/sections/CoinSection'
import renderAddressSection from '../components/IndexPage/sections/AddressSection'

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

			numOfAccountsToShow: 3,
			numOfAddressesToShow: 1,
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
	
	handleAccountCardClick = (Account, i) => {
		this.setState({
			activeAccountIndex: i,
			activeAccount: Account
		})
	}

	handleAddCoin = () => {
		console.log('this function is not yet available')
	}
	
	handleAddAccount = () => {
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
	
	renderWallet = (classes) => {
		let props = {
			classes,
			wallet: this.Wallet,
			state: this.state,
			fn: {
				handleCoinCardClick: this.handleCoinCardClick,
				handleAccountCardClick: this.handleAccountCardClick,
				handleAddCoin: this.handleAddCoin,
				handleAddAccount: this.handleAddAccount
			}
		}
		return <div className={classes.walletContainer}>
			<div className={classes.contentLayout}>
				<Paper elevation={1} className={classes.paperLayout}>
					<div className={classes.walletHeader}>
						<h4 style={{margin: '0px', fontSize: '18px'}}>
							<span>Balance: $0.00</span>
						</h4>
					</div>
					<div className={classes.sectionWrapper}>
						<RenderCoinSection {...props} />
						<div className={classes.detailsWrapper}>
						
						</div>
					
					</div>
					{/*{renderAccountSection(props)}*/}
					{/*{renderAddressSection(props)}*/}
					{/*{renderTxSection(props)}*/}
				</Paper>
			</div>
		</div>
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

Index.propTypes = {
	classes: PropTypes.object.isRequired,
};

let component = withStyles(IndexStyles)(Index)
component = withTheme()(component)
component = withLayout(component)

export default component