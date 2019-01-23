import React from 'react'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';



class SendView extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			coinChecked: 'bitcoin',
			address: '',
			amount: ''
		}
	}
	
	handleCoinPick = coin => {
		this.setState({
			coinChecked: coin
		})
	}
	
	handleAddressChange = (value) => {
		this.setState({address: value})
	}
	
	handleAmountChange = (value) => {
		this.setState({amount: value})
	}
	
	handleSendClick = (e, wallet) => {
		// e.preventDefault()
		if (this.state.address === '' || this.state.amount === 0) {
			alert('Properly fill out fields')
			return
		}
		const options = {
			to: {[this.state.address]: this.state.amount},
			coin: this.state.coinChecked,
		}
		wallet.sendPayment(options).then(res => alert(res)).catch(err => alert(err))
	}

	render() {
		const {classes, Interface} = this.props
		return (
			<div className={classes.sendContainer}>
				<div className={classes.sendHeader}>
					<span className={classes.sendHeaderText}>Send TX</span>
				</div>
				<div className={classes.sendBody}>
					<div className={classes.sendCoinSelection}>
						{Object.keys(Interface.wallet.getCoins()).map((coin, i) => {
							return (
								<FormGroup key={i} row>
									<FormControlLabel
										control={
											<Checkbox
												checked={this.state.coinChecked === coin}
												onChange={() => {this.handleCoinPick(coin)}}
												value={coin}
												color={'primary'}
											/>
										}
										label={coin}
									/>
								</FormGroup>
							)
						})}
					</div>
					<div className={classes.sendAddressRow}>
						<span className={classes.sendTitle}>Address</span>
						<input
							className={classes.sendAddressInputField}
							required
							name={'address'}
							placeholder='Double check your address'
							type="text"
							value={this.state.address}
							onChange={(e) => {this.handleAddressChange(e.target.value)}}
						/>
					</div>
					<div className={classes.sendAmountRow}>
						<span className={classes.sendTitle}>Amount</span>
						<input
							className={classes.sendAmountInputField}
							required
							name={'amount'}
							type='number'
							value={this.state.amount}
							onChange={(e) => {this.handleAmountChange(e.target.value)}}
						/>
					</div>
					<div className={classes.sendButtonRow}>
						<Button
							color={'primary'}
							variant={'outlined'}
							className={classes.sendButton}
							onClick={(e) => {this.handleSendClick(e, Interface.wallet)}}
						>Send</Button>
					</div>
				</div>
			</div>
		)
	}
	
}

export default SendView