import React from 'react'
import PropTypes from 'prop-types'

const __ = (...classes) => {
	return classes.join(' ')
}

class APISettings extends React.Component {
	constructor(props) {
		super(props);
		
		this.initialExplorerUrls = props.explorerUrls
		
		this.state = {
			explorerUrls: this.initialExplorerUrls,
		}
	}
	
	componentDidMount() {
		this.setState({explorerUrls: this.props.explorerUrls})
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.explorerUrls !== this.props.explorerUrls) {
			this.setState({explorerUrls: {...this.state.explorerUrls, ...this.props.explorerUrls}})
		}
		if (prevProps.displayCoins !== this.props.displayCoins) {
			for (let coin of this.props.displayCoins) {
				let match = false
				for (let coin_x in this.initialExplorerUrls) {
					if (coin === coin_x) {
						match = true
						break
					}
				}
				if (!match) {
					this.initialExplorerUrls = {
						...this.initialExplorerUrls,
						[coin]: this.props.defaultExplorerUrls[coin]
					}
				}
			}
		}
	}
	
	handleApiUrlChange = (e) => {
		let coin = e.target.name
		let api = e.target.value
		let urls = {...this.state.explorerUrls}
		urls[coin] = api
		this.setState({explorerUrls: urls})
	}
	
	render() {
		const {classes} = this.props
		return (
			<div className={classes.settingContainer}>
				<div className={classes.settingHeader}>
					<h3 style={{margin: '0'}}>APIs</h3>
				</div>
				{this.props.displayCoins.map((coin, i) => {
					return (
						<div key={i} className={__(classes.settingRow, classes.marginTB3)}>
									<span
										className={classes.spanWidth120}
									>{coin}</span>
							<input
								onChange={(e) => {
									this.handleApiUrlChange(e)
								}}
								className={classes.inputField}
								type={'text'}
								value={this.state.explorerUrls[coin] || ''}
								name={`${coin}`}
							/>
						</div>
					)
				})}
				<div className={classes.settingRow}>
					<input
						onClick={() => this.props.setExplorerUrls(this.state.explorerUrls)}
						type={'submit'}/>
					<div className={classes.marginLR3}/>
					<input
						onClick={() => {
							this.props.setExplorerUrls(this.initialExplorerUrls)
						}
						}
						value={'Reset'}
						type={'submit'}/>
				</div>
			</div>
		)
	}
}

APISettings.propTypes = {
	defaultExplorerUrls: PropTypes.object.isRequired,
	displayCoins: PropTypes.array.isRequired,
	explorerUrls: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	setExplorerUrls: PropTypes.func.isRequired,
}

export default APISettings