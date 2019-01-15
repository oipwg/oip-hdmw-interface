import React from 'react'
import Head from 'next/head';
import PropTypes from 'prop-types';
import {Wallet} from 'oip-hdmw'
import _ from 'lodash'
import classNames from 'classnames';

import {withTheme, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination'

import withLayout from '../lib/withLayout';
import EnhancedTableToolbar from '../components/IndexPage/EnhancedTableToolbar'
import IndexStyles from '../components/styles/IndexPage'

class Index extends React.Component {
	constructor(props) {
		super(props)

		this.Wallet = new Wallet("abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about", {discover: false})

		this.state = {
			walletLoaded: false,
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

	handleAccountClick = (i) => {
		this.setState({
			activeAccount: i
		})
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

	renderCoinSection = (classes) => {
		return <div className={classes.sectionCoins}>
			{Object.keys(this.Wallet.getCoins()).map((coin, i) => {
				return (
					<Card key={i} className={classes.coinCard}>
						<ButtonBase className={classes.cardButtonBase} onClick={() => {
							this.handleCoinCardClick(coin)
						}}>
							<CardContent>
								<Typography className={classes.coinTypography}>
									{_.toUpper(coin)}
								</Typography>
							</CardContent>
						</ButtonBase>
					</Card>
				)
			})}
			<Card className={`${classes.coinCard}`}>
				<ButtonBase className={classes.cardButtonBase} disabled={true} onClick={() => {
					console.log('Extra Coins')
				}}>
					<CardContent>
						<Typography className={classes.extraCoinTypography}>
							Extra Coins Coming Soon
						</Typography>
					</CardContent>
				</ButtonBase>
			</Card>
		</div>
	}

	renderAddressesSection = (classes) => {
		let addresses = []
		let coin = this.state.Coin ? this.state.Coin : this.Wallet.getCoin(this.state.activeCoinName)
		let account = coin.getAccount(this.state.activeAccountIndex)
		for (let i = 0; i < this.state.numOfAddressesToShow; i++) {
			addresses.push(account.getAddress(this.state.activeChain, i))
		}
		for (let addr of addresses) {
			console.log(addr.getPublicAddress())
		}
		return (
			<div className={classes.sectionAddresses}>
				<Paper classes={{root: classes.rootTable}} elevation={1}>
					<EnhancedTableToolbar numSelected={0} activeCoinName={this.state.activeCoinName} activeAccountIndex={this.state.activeAccountIndex} />
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell>Address (P2PKH) </TableCell>
								<TableCell align="right">Balance</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{addresses.map((addr, id) => (
								<TableRow key={id}>
									<TableCell component="th" scope="row">
										{addr.getPublicAddress()}
									</TableCell>
									<TableCell align="right">0.00</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
						component="div"
						count={10}
						rowsPerPage={5}
						page={0}
						backIconButtonProps={{
							'aria-label': 'Previous Page',
						}}
						nextIconButtonProps={{
							'aria-label': 'Next Page',
						}}
						onChangePage={() => {console.log('onChangePage')}}
						onChangeRowsPerPage={() => {console.log('onChangeRowsPerPage')}}
					/>
				</Paper>
			</div>
		)
	}

	renderAccountSection = (classes) => {
		let coin = this.Wallet.getCoin(this.state.activeCoinName)
		let accounts = []
		for (let i = 0; i < this.state.numOfAccountsToShow; i++) {
			accounts.push(coin.getAccount(i))
		}
		return (
			<div className={classes.sectionAccounts}>
				{accounts.map((account, i) => {
					return (
						<Card key={i} className={classes.coinCard}>
							<ButtonBase className={classes.cardButtonBase} onClick={() => {
								this.handleAccountCardClick(account, i)
							}}>
								<CardContent>
									<Typography className={classes.coinTypography}>
										Account {i + 1}
									</Typography>
								</CardContent>
							</ButtonBase>
						</Card>
					)
				})}
				<Card className={`${classes.coinCard}`}>
					<ButtonBase className={classes.cardButtonBase} onClick={() => {
						this.setState({numOfAccountsToShow: this.state.numOfAccountsToShow + 1})
					}}>
						<CardContent>
							<Typography className={classes.extraCoinTypography}>
								+
							</Typography>
						</CardContent>
					</ButtonBase>
				</Card>
			</div>
		)
	}

	renderWallet = (classes) => {}

	render() {
		const {classes} = this.props
		return (
			<div className={classes.root}>
				<Head>
					<title>OIP-HDMW</title>
					<meta name="description" content="Open Index Protocol HD Multi Wallet"/>
				</Head>
				{this.renderCoinSection(classes)}
				{this.renderAccountSection(classes)}
				{this.renderAddressesSection(classes)}

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