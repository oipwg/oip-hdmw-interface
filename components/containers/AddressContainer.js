import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Addresses from '../views/dumb/Addresses'
import {increaseAddressCount, setAddressCount} from "../../redux/actions/Interface/creators";

function AddressContainer(props) {
	const activeCoin = props.Interface.activeCoin || 'flo'
	const coinState = props.Interface.coins[activeCoin] || {
		addressCount: 1,
		accountsCount: 1,
		activeAccountIndex: 0,
		activeChainIndex: 0,
		activeAddressIndex: 0,
	}

	let Coin = props.Wallet.getCoin(activeCoin)
	let Account = Coin.getAccount(coinState.activeAccountIndex)
	let addresses = []
	
	const discoverUsedAddresses = () => {
		Account.discoverChain(0).then(() => {
			let addrs = Account.getUsedAddresses(0)
			if (addrs.length === 0) {
				return
			}
			let lastAddr = addrs[addrs.length - 1]
			let index = lastAddr.address.index
			props.setAddressCount(index + 1) //address count is not 0 indexed
		})
	}
	
	useEffect(() => {
		discoverUsedAddresses()
	}, [activeCoin])
	
	for (let i = 0; i < coinState.addressCount; i++) {
		addresses.push(Account.getAddress(coinState.activeChainIndex, i))
	}
	
	return <Addresses
		Interface={props.Interface}
		Wallet={props.Wallet}
		increaseAddressCount={props.increaseAddressCount}
		addresses={addresses}
	/>
}

const mapDispatchToProps = {
	increaseAddressCount,
	setAddressCount,
}

const mapStateToProps = state => ({
	Interface: state.Interface,
})

AddressContainer.propTypes = {
	Interface: PropTypes.object.isRequired,
	Wallet: PropTypes.object.isRequired,
	increaseAddressCount: PropTypes.func.isRequired,
	setAddressCount: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressContainer)