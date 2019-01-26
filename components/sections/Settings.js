import React from 'react';
import {withStyles} from '@material-ui/core/styles';

//styles
import styles from '../../styles/Settings'

class Settings extends React.Component {
	render() {
		const {classes, actions, Settings} = this.props
		return (
			<div className={classes.settingsContainer}>
				<div className={classes.settingsHeader}>
					<h4 className={classes.settingsHeaderTitle}>
						Settings
					</h4>
				</div>
				<div className={classes.settingsBody}>
					<div className={classes.coinSettingsContainer}>
						<div className={classes.coinSettingsHeader}>
							<h3 style={{margin: '0'}}>Coins</h3>
						</div>
						<div className={classes.coinSettings}>
							<div className={classes.showTestnetCoins}>
								<span>Display testnet coins</span>
								<input
									type='checkbox'
									name="coinSetting"
									value="showTestnetCoins"
									checked={Settings.toggleTestnetCoins}
									onChange={() => {
										actions.toggleTestnetCoins()
									}}/>
							</div>
						</div>
					
					</div>
					<div className={classes.apiSettings}>
					
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Settings)