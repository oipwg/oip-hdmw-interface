import React, {useState} from 'react'

function FloDataContainer({floData, classes}) {
	const [toggled, toggle] = useState(false)

	const handleToggle = () => {
		toggle(!toggled)
	}

	const text = toggled ? 'show less' : 'show more'

	const getElement = () => {
		return <span onClick={handleToggle}>{text}</span>
	}

	const longFloData = () => {
		return floData.length > 70
	}
	const toggleTextOverflow = longFloData() ? getElement() : null

	return <div className={classes.floDataContainer} style={{whiteSpace: toggled ? 'unset' : 'nowrap'}}>
		<p>floData: {floData}</p>
		{toggleTextOverflow}
	</div>
}

export default FloDataContainer
