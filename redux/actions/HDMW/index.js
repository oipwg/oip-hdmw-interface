import * as HDMW_ACTIONS from './creators'
import * as HDMW_THUNKS from './thunks'

export const HDMWActions = {
	...HDMW_ACTIONS,
	...HDMW_THUNKS
}
