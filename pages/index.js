import React from 'react'
import Head from 'next/head';
import PropTypes from 'prop-types';
import {withTheme, withStyles} from '@material-ui/core/styles';
import {Wallet} from 'oip-hdmw'
import withLayout from '../lib/withLayout';


const styles = theme => ({


})

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hasWallet: false,
			Wallet: new Wallet("abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about", {discover: false}),
			activeCoin: 'bitcoin',
			activeAccount: 0,
			activeChain: 0,
			activeAddress: 0,
			numOfAccountsToShow: 2,
			numOfAddressesToShow: 20,
		}
	}

	handleAccountClick = (i) => {
		this.setState({
			activeAccount: i
		})
	}

	handleCoinClick = (coin) => {
		this.setState({
			activeCoin: coin,
			Account: this.state.Wallet.getCoin(coin).getAccount(this.state.activeAccount)
		})
	}

	handleAddCoin = () => {
		console.log('this function is not yet available')
	}

	renderCoins = () => {
		return (
			<div className={"p-0 no-gutters h-100"}>
				{Object.keys(this.state.Wallet.getCoins()).map((coin, i) => {
					return (
						<div key={i}
						     className={'coinContainer d-flex justify-content-center align-items-center h-25 border'}
						     onClick={() => this.handleCoinClick(coin)}
						>
							<img src={`/static/${coin}.svg`} alt={`${coin}`} style={{height: '100px'}}/>
						</div>
					)
				})}
			</div>
		)
	}

	renderAddresses = () => {
		let addresses = []
		let coin = this.state.Wallet.getCoin(this.state.activeCoin)
		let account = coin.getAccount(this.state.activeAccount)
		for (let i = 0; i < this.state.numOfAddressesToShow; i++) {
			addresses.push(account.getAddress(this.state.activeChain, i))
		}
		return (
			<div className="p-0 no-gutters h-100">
				{addresses.map( (addr, i ) => {
					return (
						<li key={i}>
							{addr.getPublicAddress()}
						</li>
					)
				})}
			</div>
		)
	}

	renderAccounts = () => {
		let coin = this.state.Wallet.getCoin(this.state.activeCoin)
		let accounts = []
		for (let i = 0; i < this.state.numOfAccountsToShow; i++) {
			accounts.push(coin.getAccount(i))
		}
		return (
			<div className="p-0 no-gutters h-100">
				{accounts.map((account, i) => {
					return (
						<div
							key={i}
							className={"accountContainer d-flex justify-content-center align-items-center h-25 border"}
							onClick={() => this.handleAccountClick(i)}
						>
							Account: {i+1}
						</div>
					)
				})}
			</div>
		)
	}

	render() {
		return (
			<div className={'Index-page'} style={{height: `calc(100% - 64px)`}}>
				<Head>
					<title>OIP-HDMW</title>
					<meta name="description" content="Open Index Protocol HD Multi Wallet"/>
				</Head>
				<div className={'container-fluid p-0 no-gutters h-100'}>
					<div className="row no-gutters h-100">
						<div className='col-3 h-100'>
							{/*{this.renderCoins()}*/}
						</div>
						<div className='col-6'>
							{/*{this.renderAddresses()}*/}
						</div>
						<div className='col-3 h-100'>
							{/*{this.renderAccounts()}*/}
						</div>
					</div>
				</div>

			</div>
		)
	}
}

Index.propTypes = {
	classes: PropTypes.object.isRequired,
};

let component = withStyles(styles)(Index)
component = withTheme()(component)
component = withLayout(component)

export default component