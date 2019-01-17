import React from "react";
import Paper from '@material-ui/core/Paper'
import RenderAccountSection from "./sections/AccountSection";
import RenderAddressSection from "./sections/AddressSection"
import RenderCoinSection from './sections/CoinSection'

const Wallet = (props) => {
	const {classes, state, fn} = props;
	
	const renderDetailsBody = () => {
		return state.detailsView === 'addresses' ? RenderAddressSection(props) : ''
	}
	const getActiveViewStyle = (view) => {
		if (view === state.detailsView) {
			return {
				fontSize: '18px',
			}
		}
	}
	
	return <div className={classes.walletContainer}>
		<div className={classes.contentLayout}>
			<Paper elevation={1} className={classes.paperLayout}>
				<div className={classes.walletHeader}>
					<h4 style={{margin: '0px', fontSize: '18px'}}>
						<span>Balance: $0.00</span>
					</h4>
				</div>
				<div className={classes.sectionWrapper}>
					<RenderCoinSection {...props} />
					<div className={classes.detailsWrapper}>
						<div className={classes.detailsHeader} >
							<span
								style={getActiveViewStyle('addresses')}
								onClick={() => fn.setDetailsView('addresses')}
								className={classes.headerLink}>Addresses
							</span>
							<span
								style={getActiveViewStyle('transactions')}
								onClick={() => fn.setDetailsView('transactions')}
								className={classes.headerLink}>Transactions
							</span>
							<div className={classes.detailsSearch}>
								<span>Search...</span>
							</div>
						</div>
						<div className={classes.detailsBody} >
							<div className={classes.detailsContainer}>
								<div className={classes.detailsLayout}>
									{renderDetailsBody()}
								</div>
							</div>
						</div>
						<div className={classes.detailsFooter} >
							{RenderAccountSection(props)}
							<span className={classes.accountsTitle}>Accounts</span>
						</div>
					
					
					</div>
				
				</div>
				{/*{renderAddressSection(props)}*/}
				{/*{renderTxSection(props)}*/}
			</Paper>
		</div>
	</div>
}

export default Wallet