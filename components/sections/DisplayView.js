import React from 'react';

import RenderAddressSection from "./Addresses"
import RenderAccountSection from "./Accounts";
import RenderCoinSection from './Coins'

const DisplayView = (props) => {
	const {actions, classes, Interface} = props
	
	const renderDetailsBody = () => {
		return Interface.detailView === 'addresses' ? RenderAddressSection(props) : null
	}
	
	const getActiveViewStyle = (view) => {
		if (view === Interface.detailView) {
			return {
				fontWeight: 'bold',
			}
		}
	}
	
	return <div className={classes.detailsWrapper}>
		<div className={classes.detailsHeader}>
			<span
				style={getActiveViewStyle('addresses')}
				onClick={() => actions.setDetailView('addresses')}
				className={classes.viewLink}>Addresses
			</span>
			<span
				style={getActiveViewStyle('transactions')}
				onClick={() => actions.setDetailView('transactions')}
				className={classes.viewLink}>Transactions
			</span>
			<div className={classes.detailsSearch}>
			
			</div>
		</div>
		<div className={classes.detailsBody}>
			<div className={classes.detailsContainer}>
				<div className={classes.detailsLayout}>
					{renderDetailsBody()}
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