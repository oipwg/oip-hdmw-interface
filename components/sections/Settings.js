import React from 'react';
import {withStyles} from '@material-ui/core/styles';

//styles
import styles from '../../styles/Settings'
import notifier from '../../lib/notifier'

//easily concat jss classes. Two underscores to not get confused with lodash
const __ = (...classes) => {
	return classes.join(' ')
}

class Settings extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			coinNetworkApiUrls: props.Wallet.getNetworkApiUrls(),
			defaultCoinNetworkApiUrls: props.Wallet.getNetworkApiUrls()
		}
	}
	
	componentDidUpdate(prevProps, prevState) {
		console.log('Settings.componentDidUpdate')
		if (prevProps.Settings.toggleTestnetCoins !== this.props.Settings.toggleTestnetCoins) {
			this.setState( {
				coinNetworkApiUrls: this.props.Wallet.getNetworkApiUrls(),
				defaultCoinNetworkApiUrls: this.props.Wallet.getNetworkApiUrls()
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
		this.props.Wallet.setNetworkApis(this.state.coinNetworkApiUrls)
		//dispatch
		this.props.actions.setCoinNetworkApis(this.state.coinNetworkApiUrls)
	}
	
	handleApiUrlReset = () => {
		//set wallet urls
		this.props.Wallet.setNetworkApis(this.state.defaultCoinNetworkApiUrls)
		//set redux urls
		this.props.actions.setCoinNetworkApis(this.state.defaultCoinNetworkApiUrls)
		//set state urls
		this.setState({
			coinNetworkApiUrls: this.state.defaultCoinNetworkApiUrls
		})
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
	
	render() {
		console.log('Settings.render()')
		const {classes, actions, Settings, Wallet} = this.props
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
								value="showTestnetCoins"
								checked={Settings.toggleTestnetCoins}
								onChange={() => {
									actions.toggleTestnetCoins()
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
									actions.displayBalances()
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
										checked={Settings.displayCoins.includes(coin)}
										onChange={() => {
											actions.displayCoin(coin, !Settings.displayCoins.includes(coin))
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
						{Object.keys(Wallet.getNetworkApiUrls()).map( (coin, i) => {
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

export default withStyles(styles)(Settings)