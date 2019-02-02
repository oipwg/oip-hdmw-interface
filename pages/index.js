import React from 'react'
import withLayout from '../lib/withLayout';
import WalletContainer from '../components/containers/WalletContainer'

class Index extends React.Component {
	constructor(props) {
		super(props)
		console.log("Index.constructor")
	}
	componentDidMount() {
		console.log('Index.componentDidMount')
		// props.loadSettingsFromLocalStorage()
	}
	componentDidUpdate(prevProps) {
		console.log('Index.componentDidUpdate')
	}
	
	render() {
		console.log('Index.render')
		return (
			<WalletContainer />
		)
	}
}

Index.getInitialProps = ({reduxStore, res}) => {
	console.log('Index.getInitialProps')
	const state = reduxStore.getState()
	const {HDMW} = state
	if (res && !HDMW.mnemonic) {
		res.redirect('/load')
	}
	
	return {}
}

export default withLayout(Index)