import React from 'react'
import {withStyles} from "@material-ui/core";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import styles from '../../../styles/views/dumb/Send'

class SendView extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			coinChecked: props.Interface.activeCoinName,
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
	
	handleSendClick = () => {
		// e.preventDefault()
		if (this.state.address === '' || this.state.amount === 0) {
			alert('Please fill out fields')
			return
		}
		const options = {
			to: {[this.state.address]: this.state.amount},
			coin: this.state.coinChecked,
		}
		this.props.Wallet.sendPayment(options).then(res => alert(res)).catch(err => alert(err))
	}

	render() {
		const {classes, Wallet} = this.props
		return (
			<div className={classes.sendContainer}>
				<div className={classes.sendHeader}>
					<span className={classes.sendHeaderText}>Send TX</span>
				</div>
				<div className={classes.sendBody}>
					<div className={classes.sendCoinSelection}>
						{Object.keys(Wallet.getCoins()).map((coin, i) => {
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
							onClick={() => {this.handleSendClick()}}
						>Send</Button>
					</div>
				</div>
			</div>
		)
	}
	
}

export default withStyles(styles)(SendView)