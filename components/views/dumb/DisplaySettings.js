import React from 'react'
import PropTypes from 'prop-types'

const __ = (...classes) => {
	return classes.join(' ')
}

class DisplaySettings extends React.Component {
	state = {showMnemonic: false}
	handleMnemonicToggle = () => {
		this.setState({showMnemonic: !this.state.showMnemonic})
	}
	render() {
		const {classes} = this.props
		return (
			<div className={classes.settingContainer}>
				<div className={classes.settingHeader}>
					<h3 style={{margin: '0'}}>Display</h3>
				</div>
				<div className={classes.settingRow}>
					<input
						className={classes.settingCheckboxLeft}
						type='checkbox'
						name="coinSetting"
						checked={this.props.includeTestnetCoins}
						onChange={() => {
							this.props.toggleTestnetCoins(!this.props.includeTestnetCoins, this.props.Wallet)
						}}/>
					<span>Testnet coins</span>
				</div>
				<div className={classes.settingRow}>
					<input
						className={classes.settingCheckboxLeft}
						type='checkbox'
						name="displayBalances"
						checked={this.props.displayBalances}
						onChange={() => {
							this.props.toggleBalances()
						}}/>
					<span>Balances</span>
				</div>
				<div className={__(classes.settingRow, classes.flexWrap)}>
					{Object.keys(this.props.Wallet.getCoins()).map((coin, i) => {
						return <label key={i}>
							<input
								className={classes.settingCheckboxLeft}
								type='checkbox'
								name="displayCoin"
								checked={this.props.displayCoins.includes(coin)}
								onChange={() => {
									this.props.displayCoin(coin, !this.props.displayCoins.includes(coin))
								}}/>
							<span className={classes.display_CoinName}>{coin}</span>
						</label>
					})}
				</div>
				<div className={classes.settingRow}>
					<label>
						<input
							type="checkbox"
							name="mnemonic"
							onChange={this.handleMnemonicToggle}
						/>
						<span>Show Mnemonic</span>
					</label>
				</div>
				<div className={classes.settingRow} style={{justifyContent: 'center', fontWeight: '500'}}>
					<span>{this.state.showMnemonic ? this.props.Wallet.getMnemonic() : null}</span>
				</div>
			</div>
		)
	}
}

DisplaySettings.propTypes = {
	//wallet
	Wallet: PropTypes.object.isRequired,
	//classes
	classes: PropTypes.object.isRequired,
	//actions
	toggleBalances: PropTypes.func.isRequired,
	toggleTestnetCoins: PropTypes.func.isRequired,
	displayCoin: PropTypes.func.isRequired,
	//state
	displayCoins: PropTypes.array.isRequired,
	displayBalances: PropTypes.bool.isRequired,
	includeTestnetCoins: PropTypes.bool.isRequired,
}

export default DisplaySettings