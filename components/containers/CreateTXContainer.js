import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CreateTXWrapper from '../views/wrappers/CreateTXWrapper';
import {
	clearSendPaymentAsyncState,
	sendPaymentError,
	sendPaymentFetching,
	sendPaymentSuccess
} from "../../redux/actions/HDMW/creators";
import notifier from "../../lib/notifier";

class CreateTXContainer extends React.Component {
	handleSendClick = async (address, amount, floData, coin) => {
		if (address === '' || amount === 0) {
			alert('Please fill out fields')
			return
		}
		const options = {
			to: {[address]: amount},
			coin,
			floData
		}
		this.props.sendPaymentFetching()
		let res
		try {
			res = await this.props.Wallet.sendPayment(options)
		} catch (err) {
			this.props.sendPaymentError()
		}
		if (!!res) {
			this.props.sendPaymentSuccess()
			notifier(`txid: ${res}`)
		}
	}
	
	render() {
		return <CreateTXWrapper
			handleSendClick={this.handleSendClick}
			Wallet={this.props.Wallet}
			activeCoin={this.props.activeCoin}
			sendPaymentAsyncState={this.props.sendPaymentAsyncState}
			clearSendPaymentAsyncState={this.props.clearSendPaymentAsyncState}
		/>
	}
}

const mapDispatchToProps = {
	sendPaymentFetching,
	sendPaymentSuccess,
	sendPaymentError,
	clearSendPaymentAsyncState,
}

const mapStateToProps = (state) => {
	return {
		activeCoin: state.Interface.activeCoin,
		Interface: state.Interface,
		sendPaymentAsyncState: state.HDMW.sendPaymentAsyncState
	}
}

CreateTXContainer.propTypes = {
	activeCoin: PropTypes.string.isRequired,
	Interface: PropTypes.object.isRequired,
	sendPaymentSuccess: PropTypes.func.isRequired,
	sendPaymentFetching: PropTypes.func.isRequired,
	sendPaymentError: PropTypes.func.isRequired,
	sendPaymentAsyncState: PropTypes.object.isRequired,
	clearSendPaymentAsyncState: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTXContainer)