import React from 'react'

import DisplayHeader from './DisplayHeader'
import DisplayFooter from './DisplayFooter'

function DisplayInterface(props) {
	const {classes, DisplayBody, setActiveView, activeView} = props
	
	return <div className={classes.displayContainer}>
		<DisplayHeader
			classes={classes}
			setActiveView={setActiveView}
			activeView={activeView}
		/>
		<div className={classes.displayBodyWrapper}>
			<div className={classes.displayBodyLayout}>
				<div className={classes.displayBody}>
					{DisplayBody}
				</div>
			</div>
		</div>
		<DisplayFooter
			classes={classes}
		/>
	</div>
}

export default DisplayInterface