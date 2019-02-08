import React, {useRef, useState} from 'react'

function FloDataContainer({floData, classes}) {
	const floDataRef = useRef(null)
	const [toggled, toggle] = useState(false)
	
	const getTextLen = () => {
		if (!floDataRef.current) {
			return false
		}
		return floDataRef.current.innerText.length > 70
	}
	
	let text = toggled ? 'show less' : 'show more'
	
	const toggleText = () => {
		toggle(!toggled)
	}
	
	const getElement = () => {
		console.log(floDataRef.current)
		return <span onClick={toggleText}>{text}</span>
	}
	
	const showMoreText = getTextLen() ? getElement() : null
	
	return <div className={classes.floDataContainer} style={{whiteSpace: toggled ? 'unset' : 'nowrap'}}>
		<p ref={floDataRef}>floData: {floData}</p>
		{showMoreText}
	</div>
}

export default FloDataContainer