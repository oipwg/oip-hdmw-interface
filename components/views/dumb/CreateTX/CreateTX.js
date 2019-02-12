import React, {useState} from 'react'
import PropTypes from 'prop-types'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

function CreateTX(props) {
	const {classes, Wallet, handleSendClick} = props
	
	const [address, updateAddress] = useState('')
	const [amount, updateAmount] = useState(0)
	const [floData, updateFloData] = useState('')
	const [checkedCoin, updateCheckedCoin] = useState(props.activeCoin)
	
	return (
		<div className={classes.sendBody}>
			<div className={classes.sendCoinSelection}>
				{Object.keys(Wallet.getCoins()).map((coin, i) => {
					return (
						<FormGroup key={i} row>
							<FormControlLabel
								control={
									<Checkbox
										checked={checkedCoin === coin}
										onChange={() => {
											updateCheckedCoin(coin)
										}}
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
			<div className={classes.fieldRow}>
				<span className={classes.fieldTitle}>Address</span>
				<input
					className={classes.sendAddressInputField}
					required
					name={'address'}
					placeholder='Double check your address'
					type="text"
					value={address}
					onChange={(e) => {
						updateAddress(e.target.value)
					}}
				/>
			</div>
			<div className={classes.fieldRow}>
				<span className={classes.fieldTitle}>Amount</span>
				<input
					className={classes.sendAmountInputField}
					required
					name={'amount'}
					type='number'
					value={amount}
					onChange={(e) => {
						updateAmount(e.target.value)
					}}
				/>
			</div>
			{checkedCoin === 'flo' || checkedCoin === 'flo_testnet' ? (
				<div className={classes.fieldRow}>
					<span className={classes.fieldTitle}>floData</span>
					<input
						className={classes.floDataInputField}
						required
						name={'floData'}
						type='text'
						value={floData}
						onChange={(e) => {
							updateFloData(e.target.value)
						}}
					/>
				</div>
			) : (null)}
			<div className={classes.fieldRow}>
				<Button
					color={'primary'}
					variant={'outlined'}
					className={classes.sendButton}
					onClick={() => {
						handleSendClick(address, amount, floData, checkedCoin)
					}}
				>Send</Button>
			</div>
		</div>
	)
}

CreateTX.propTypes = {
	Wallet: PropTypes.object.isRequired,
	activeCoin: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired,
}

export default CreateTX