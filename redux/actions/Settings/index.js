import * as SETTINGS_ACTIONS from './creators'
import * as SETTINGS_THUNKS from './thunks'

export const SettingsActions = {
	...SETTINGS_ACTIONS,
	...SETTINGS_THUNKS
}
