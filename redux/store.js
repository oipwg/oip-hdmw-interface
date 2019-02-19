import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Interface, Settings, HDMW} from './reducers'

// Create our Store
const createStoreFn = () => {
	const reducers = {
		Interface,
		Settings,
		HDMW
	}
	
	// Create the logger to log Actions to the console
	let middleware = [thunkMiddleware]
	if (process.env.NODE_ENV !== 'production') {
		const reduxLogger = require('redux-logger')
		const logger = reduxLogger.createLogger({
			collapsed: true
		});
		middleware.push(logger)
	}
	
	let composeEnhancers
	
	// Compose a "name" for the window.
	if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
		composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			name: "oip-hdmw"
		})
	} else {
		composeEnhancers = compose
	}
	
	// Use the Middlewear and create an "enhancer"
	const enhancer = composeEnhancers(
		applyMiddleware(...middleware),
		// other store enhancers if any
	);
	
	return createStore(combineReducers(reducers), enhancer)
}

export {
	createStoreFn as createStore
}