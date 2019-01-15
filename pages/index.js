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
import Toolbar from '@material-ui/core/Toolbar';
import TablePagination from '@material-ui/core/TablePagination'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';

import withLayout from '../lib/withLayout';


const styles = theme => ({
	root: {
		height: `calc(100% - 64px)`,
		display: 'flex',
		flexDirection: 'row',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	rootTable: {
		width: '100%',
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
	sectionCoins: {
		width: '30%',
		flexDirection: 'column',
		// backgroundColor: 'red',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexDirection: 'row',
			width: '100%',
			height: '10%'
		},
	},
	sectionAddresses: {
		width: '60%',
		flexDirection: 'column',
		overflowY: 'auto',
		// backgroundColor: 'blue',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			width: '100%',
			order: '3',

		},
	},
	sectionAccounts: {
		width: '30%',
		flexDirection: 'column',
		overflowY: 'auto',
		// backgroundColor: 'green',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexDirection: 'row',
			width: '100%',
			height: '10%',
			overflowX: 'auto'
		},
	},
	coinCard: {
		display: 'flex',
		height: '25%',
		justifyContent: 'center',
		alignItems: 'Center',
		borderRadius: '0px',
		[theme.breakpoints.down('sm')]: {
			width: '25%',
			height: '100%'
		},
	},
	coinTypography: {
		fontSize: '25px',
		color: theme.palette.primary,
		[theme.breakpoints.down('sm')]: {
			fontSize: '16px',
		},
	},
	extraCoinTypography: {
		color: theme.palette.error.main
	},
	cardButtonBase: {
		width: '100%',
		height: '100%',
	}
})

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
			numOfAddressesToShow: 20,
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

	render() {
		const {classes} = this.props
		return (
			<div className={classes.root}>
				<Head>
					<title>OIP-HDMW</title>
					<meta name="description" content="Open Index Protocol HD Multi Wallet"/>
				</Head>
				{this.renderCoinSection(classes)}
				{this.renderAddressesSection(classes)}
				{this.renderAccountSection(classes)}
			</div>
		)
	}
}

const toolbarStyles = theme => ({
	root: {
		paddingRight: theme.spacing.unit,
	},
	highlight:
		theme.palette.type === 'light'
			? {
				color: theme.palette.secondary.main,
				backgroundColor: lighten(theme.palette.secondary.light, 0.85),
			}
			: {
				color: theme.palette.text.primary,
				backgroundColor: theme.palette.secondary.dark,
			},
	spacer: {
		flex: '1 1 100%',
	},
	actions: {
		color: theme.palette.text.secondary,
	},
	title: {
		flex: '0 0 auto',
	},
});

let EnhancedTableToolbar = props => {
	const { numSelected, classes, activeCoinName, activeAccountIndex } = props;

	return (
		<Toolbar
			className={classNames(classes.root, {
				[classes.highlight]: numSelected > 0,
			})}
		>
			<div className={classes.title}>
				{numSelected > 0 ? (
					<Typography color="inherit" variant="subtitle1">
						{numSelected} selected
					</Typography>
				) : (
					<Typography variant="h6" id="tableTitle">
						{_.upperFirst(activeCoinName)} Addresses - Account {activeAccountIndex + 1}
					</Typography>
				)}
			</div>
			<div className={classes.spacer} />
			<div className={classes.actions}>
				{numSelected > 0 ? (
					<Tooltip title="Delete">
						<IconButton aria-label="Delete">
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				) : (
					<Tooltip title="Filter list">
						<IconButton aria-label="Filter list">
							<FilterListIcon />
						</IconButton>
					</Tooltip>
				)}
			</div>
		</Toolbar>
	);
};

EnhancedTableToolbar.propTypes = {
	classes: PropTypes.object.isRequired,
	numSelected: PropTypes.number,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

Index.propTypes = {
	classes: PropTypes.object.isRequired,
};

let component = withStyles(styles)(Index)
component = withTheme()(component)
component = withLayout(component)

export default component