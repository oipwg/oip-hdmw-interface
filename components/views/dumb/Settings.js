import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

//styles
import styles from '../../../styles/views/dumb/Settings'
import notifier from '../../../lib/notifier'
import {setCoinNetworkApis} from "../../../redux/actions/Settings/creators";

//easily concat jss classes. Two underscores to not get confused with lodash
const __ = (...classes) => {
	return classes.join(' ')
}

class Settings extends React.Component {
	constructor(props) {
		super(props);
		console.log('Settings.constructor')
		
		this.defaultNetworkApiUrls = props.Settings.coinNetworkApiUrls
		
		this.state = {
			coinNetworkApiUrls: this.defaultNetworkApiUrls,
		}
	}
	
	componentDidMount() {
		console.log('Settings.componentDidMount')
	}
	
	componentDidUpdate(prevProps, prevState) {
		console.log('Settings.componentDidUpdate')
		//set: state -> redux -> component
		//reset: redux -> component -> state
		
		//if there was a change in the redux settings
		if (prevProps.Settings.coinNetworkApiUrls !== this.props.Settings.coinNetworkApiUrls) {
			//and the settings don't match the state as in a reset situation
			if (this.props.Settings.coinNetworkApiUrls !== this.state.coinNetworkApiUrls) {
				//then update the state to match the props
				this.setState({
					coinNetworkApiUrls: this.props.Settings.coinNetworkApiUrls
				})
			}
		}
		//todo: meh to this code
		if (prevProps.Settings.toggleTestnetCoins !== this.props.Settings.toggleTestnetCoins) {
			this.setState({
				coinNetworkApiUrls: this.props.Wallet.getNetworkApiUrls()
			})
		}
	}
	
	handleApiUrlChange = (e) => {
		let coin = e.target.name
		let api = e.target.value
		let urls = {...this.state.coinNetworkApiUrls}
		urls[coin] = api
		this.setState({coinNetworkApiUrls: urls})
	}
	
	handleApiUrlSubmit = () => {
		this.props.setCoinNetworkApis(this.state.coinNetworkApiUrls)
	}
	
	handleApiUrlReset = () => {
		//this is needed so that when the prevProps are default and the current props are default,
		//but the state is out of sync, we sync it up
		this.setState({
			coinNetworkApiUrls: this.defaultNetworkApiUrls
		})
		//dispatch
		this.props.setCoinNetworkApis(this.defaultNetworkApiUrls)
	}
	
	saveSettings = () => {
		let settings = this.props.Settings
		try {
			localStorage.setItem('hdmw_settings', JSON.stringify(settings))
			notifier('Settings saved!')
		} catch (err) {
			notifier(`Error: ${err}`)
			return false
		}
	}
	//toDo move all mapping of coins to redux
	render() {
		console.log('Settings.render')
		const {classes, Settings, Wallet, Interface} = this.props
		
		return (
			<div className={classes.settingsWrapper}>
				<div className={classes.settingsContainer}>
					<div className={classes.settingContainer}>
						<div className={classes.settingHeader}>
							<h3 style={{margin: '0'}}>Display</h3>
						</div>
						<div className={classes.settingRow}>
							<input
								className={classes.settingCheckboxLeft}
								type='checkbox'
								name="coinSetting"
								checked={Settings.toggleTestnetCoins}
								onChange={() => {
									this.props.toggleTestnetCoins(!Settings.toggleTestnetCoins)
								}}/>
							<span>Testnet coins</span>
						</div>
						<div className={classes.settingRow}>
							<input
								className={classes.settingCheckboxLeft}
								type='checkbox'
								name="displayBalances"
								value="displayBalances"
								checked={Settings.displayBalances}
								onChange={() => {
									this.props.displayBalances()
								}}/>
							<span>Balances</span>
						</div>
						<div className={__(classes.settingRow, classes.flexWrap)}>
							{Object.keys(Wallet.getCoins()).map((coin, i ) => {
								return <label key={i}>
									<input
										className={classes.settingCheckboxLeft}
										type='checkbox'
										name="displayCoin"
										value="displayCoin"
										checked={Interface.displayCoins.includes(coin)}
										onChange={() => {
											this.props.addDisplayCoin(coin, !Interface.displayCoins.includes(coin))
										}}/>
									<span className={classes.display_CoinName}>{coin}</span>
								</label>
							})}
						</div>
					</div>
					<div className={classes.sectionDivider}/>
					<div className={classes.settingContainer}>
						<div className={classes.settingHeader}>
							<h3 style={{margin: '0'}}>APIs</h3>
						</div>
						{Interface.displayCoins.map( (coin, i) => {
							return (
								<div key={i} className={__(classes.settingRow, classes.marginTB3)}>
									<span
									    className={classes.spanWidth120}
									>{coin}</span>
									<input
										onChange={(e) => {this.handleApiUrlChange(e)}}
										className={classes.inputField}
										type={'url'}
										value={this.state.coinNetworkApiUrls[coin]}
										name={`${coin}`}
									/>
								</div>
							)
						})}
						<div className={classes.settingRow}>
							<input
								onClick={this.handleApiUrlSubmit}
								type={'submit'}/>
							<div className={classes.marginLR3}/>
							<input
								onClick={this.handleApiUrlReset}
								value={'Reset'}
								type={'submit'}/>
						</div>
					</div>
					<div className={classes.sectionDivider}/>
					<div className={classes.settingContainer}>
						<div className={classes.settingHeader}>
							<h3 style={{margin: '0'}}>Save Settings</h3>
						</div>
						<div className={classes.settingRow}>
							<input
								onClick={this.saveSettings}
								value={'Save'}
								type={'submit'}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Settings.propTypes = {
	//jss
	classes: PropTypes.object.isRequired,
	//store
	Interface: PropTypes.object.isRequired,
	Settings: PropTypes.object.isRequired,
	//wallet
	Wallet: PropTypes.object.isRequired,
	//actions
	setCoinNetworkApis: PropTypes.func.isRequired,
	addDisplayCoin: PropTypes.func.isRequired,
	displayBalances: PropTypes.func.isRequired,
	toggleTestnetCoins: PropTypes.func.isRequired,
};

export default withStyles(styles)(Settings)