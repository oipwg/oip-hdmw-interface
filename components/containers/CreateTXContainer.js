import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CreateTXWrapper from '../views/wrappers/CreateTXWrapper';

class CreateTXContainer extends React.Component {
	handleSendClick = (address, amount, floData, coin) => {
		if (address === '' || amount === 0) {
			alert('Please fill out fields')
			return
		}
		const options = {
			to: {[address]: amount},
			coin,
			floData
		}
		this.props.Wallet.sendPayment(options).then(res => alert(res)).catch(err => alert(err))
	}
	
	render() {
		return <CreateTXWrapper
			handleSendClick={this.handleSendClick}
			Wallet={this.props.Wallet}
			activeCoin={this.props.activeCoin}
		/>
	}
}

const mapDispatchToProps = {

}

const mapStateToProps = (state) => {
	return {
		activeCoin: state.Interface.activeCoin,
		Interface: state.Interface,
	}
}

CreateTXContainer.propTypes = {
	activeCoin: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTXContainer)