import React from "react";
import Paper from '@material-ui/core/Paper'
import {Send} from '@material-ui/icons'

import RenderAccountSection from "./sections/Accounts";
import RenderAddressSection from "./sections/Addresses"
import RenderCoinSection from './sections/Coins'

class WalletInterface extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			detailsSearchValue: '',
		}
	}
	
	render() {
		// console.log('WalletInterface.render')
		const {classes, actions, Interface} = this.props;
		
		const renderDetailsBody = () => {
			return Interface.detailView === 'addresses' ?  RenderAddressSection(this.props) : null
		}
		
		const getActiveViewStyle = (view) => {
			if (view === Interface.detailView) {
				return {
					fontWeight: 'bold',
				}
			}
		}
		
		return (
			<div className={classes.walletContainer}>
				<div className={classes.contentLayout}>
					<Paper elevation={1} className={classes.paperLayout}>
						<div className={classes.walletHeader}>
							<h4 style={{margin: '0px', fontSize: '18px'}}>
								<span>Balance: $0.00</span>
							</h4>
							
							<Send onClick={() => {console.log('SEND')}}/>
						</div>
						<div className={classes.sectionWrapper}>
							<RenderCoinSection {...this.props} />
							
							<div className={classes.detailsWrapper}>
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
						
						</div>
						{/*{renderAddressSection(props)}*/}
						{/*{renderTxSection(props)}*/}
					</Paper>
				</div>
			</div>
		)
	}
}

export default WalletInterface