import React from "react";
import Paper from '@material-ui/core/Paper'
import {Send} from '@material-ui/icons'

import RenderCoinSection from './sections/Coins'
import RenderDisplayView from './sections/DisplayView'

class WalletInterface extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			detailsSearchValue: '',
		}
	}

	render() {
		// console.log('WalletInterface.render')
		const {classes, actions} = this.props;
		
		return (
			<div className={classes.walletContainer}>
				<div className={classes.contentLayout}>
					<Paper elevation={1} className={classes.paperLayout}>
						<div className={classes.walletHeader}>
							<h4 style={{margin: '0px', fontSize: '18px'}}>
								<span>Balance: $0.00</span>
							</h4>
							
							<Send onClick={() => {actions.setDisplayView('send')}}/>
						</div>
						<div className={classes.sectionWrapper}>
							<RenderCoinSection {...this.props} />
							{RenderDisplayView(this.props)}
						</div>
					</Paper>
				</div>
			</div>
		)
	}
}

export default WalletInterface