import React from 'react';
import {withStyles} from '@material-ui/core/styles';

//styles
import styles from '../../styles/Settings'

//easily concat jss classes. Two underscores to not get confused with lodash
const __ = (...classes) => {
	return classes.join(' ')
}

class Settings extends React.Component {
	render() {
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
					
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Settings)