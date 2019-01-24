import React from 'react';

import RenderAddressSection from "./Addresses"
import RenderSendView from './Send'
import RenderAccountSection from "./Accounts";
import RenderCoinSection from './Coins'

const DisplayView = (props) => {
	const {actions, classes, Interface} = props
	
	const renderDisplayBody = () => {
		switch (Interface.displayView) {
			case 'addresses':
				return RenderAddressSection(props)
			case 'transactions':
				break
			case 'send':
				return <RenderSendView {...props}/>
			default:
				return 'Invalid Display View'
		}
	}
	
	const getActiveViewStyle = (view) => {
		if (view === Interface.displayView) {
			return {
				fontWeight: 'bold',
			}
		}
	}
	
	return <div className={classes.detailsWrapper}>
		<div className={classes.detailsHeader}>
			<span
				style={getActiveViewStyle('addresses')}
				onClick={() => actions.setDisplayView('addresses')}
				className={classes.viewLink}>Addresses
			</span>
			<span
				style={getActiveViewStyle('transactions')}
				onClick={() => actions.setDisplayView('transactions')}
				className={classes.viewLink}>Transactions
			</span>
			<span
				style={getActiveViewStyle('send')}
				onClick={() => actions.setDisplayView('send')}
				className={classes.viewLink}>Send
			</span>
			<div className={classes.detailsSearch}>
			
			</div>
		</div>
		<div className={classes.displayWrapper}>
			<div className={classes.displayContainer}>
				<div className={classes.displayLayout}>
					{renderDisplayBody()}
				</div>
			</div>
		</div>
		<div className={classes.detailsFooter}>
			{/*{RenderAccountSection(this.props)}*/}
			{/*<span className={classes.accountsTitle}>Accounts</span>*/}
		</div>
	</div>
}

export default DisplayView