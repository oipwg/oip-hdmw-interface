import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Addresses from '../views/dumb/Addresses'

import {increaseAddressCount} from "../../redux/actions/Interface/creators";

function AddressContainer(props) {
	
	return <Addresses
		Interface={props.Interface}
		Wallet={props.Wallet}
		increaseAddressCount={props.increaseAddressCount}
	/>
}

const mapDispatchToProps = {
	increaseAddressCount
}

const mapStateToProps = state => ({
	Interface: state.Interface,
})

AddressContainer.propTypes = {
	Interface: PropTypes.object.isRequired,
	Wallet: PropTypes.object.isRequired,
	increaseAddressCount: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressContainer)