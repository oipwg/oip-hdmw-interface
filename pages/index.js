import React from 'react'
import withLayout from '../lib/withLayout';
import Interface from '../components/containers/InterfaceContainer'

import {initialLoad} from "../redux/actions/Settings/thunks";

const Index = () => <Interface />

Index.getInitialProps = ({reduxStore, res}) => {
	const reduxState = reduxStore.getState()
	if (res && !reduxState.HDMW.mnemonic) {
		res.redirect('/load')
		return {}
	}
	reduxStore.dispatch(initialLoad())
	
	return {}
}

export default withLayout(Index)