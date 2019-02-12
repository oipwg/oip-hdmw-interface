import React from 'react'
import PropTypes from 'prop-types'

function CreateTXHeader(props) {
	const {classes} = props
	
	return <div className={classes.createTXHeader}>
	
	</div>
}

CreateTXHeader.propTypes = {
	classes: PropTypes.object.isRequired,
	
}

export default CreateTXHeader