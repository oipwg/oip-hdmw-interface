import * as INTERFACE_ACTIONS from './creators'
import * as INTERFACE_THUNKS from './thunks'

export const InterfaceActions = {
	...INTERFACE_ACTIONS,
	...INTERFACE_THUNKS
}
