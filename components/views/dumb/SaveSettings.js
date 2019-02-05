import React from 'react'
import PropTypes from 'prop-types'
import notifier from "../../../lib/notifier";

function SaveSettings({classes, Settings}) {
	const saveSettings = () => {
		//remove flag state
		delete Settings.testnetAdded
		
		try {
			localStorage.setItem('settings', JSON.stringify(Settings))
			notifier('Settings saved!')
		} catch (err) {
			notifier(`Error: ${err}`)
			return false
		}
	}
	return (
		<div className={classes.settingContainer}>
			<div className={classes.settingHeader}>
				<h3 style={{margin: '0'}}>Save Settings</h3>
			</div>
			<div className={classes.settingRow}>
				<input
					onClick={saveSettings}
					value={'Save'}
					type={'submit'}/>
			</div>
		</div>
	)
}

SaveSettings.propTypes = {
	classes: PropTypes.object.isRequired,
	Settings: PropTypes.object.isRequired,
}

export default SaveSettings