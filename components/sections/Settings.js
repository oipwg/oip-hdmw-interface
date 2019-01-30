import React from 'react';
import {withStyles} from '@material-ui/core/styles';

//styles
import styles from '../../styles/Settings'

class Settings extends React.Component {
	render() {
		const {classes, actions, Settings} = this.props
		return (
			<div className={classes.settingsWrapper}>
				<div className={classes.settingsContainer}>
					<div className={classes.settingContainer}>
						<div className={classes.settingHeader}>
							<h3 style={{margin: '0'}}>Coins</h3>
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
							<span>Display testnet coins</span>
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
							<span>Display balances</span>
						</div>
					</div>
					
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Settings)