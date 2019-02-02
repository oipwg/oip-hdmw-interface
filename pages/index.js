import React from 'react'
import withLayout from '../lib/withLayout';
import Interface from '../components/containers/InterfaceContainer'

class Index extends React.Component {
	constructor(props) {
		super(props)
		console.log("Index.constructor")
		//load from localStorage
	}
	componentDidMount() {
		console.log('Index.componentDidMount')
	}
	componentDidUpdate(prevProps) {
		console.log('Index.componentDidUpdate')
	}
	
	render() {
		console.log('Index.render')
		return <Interface />
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