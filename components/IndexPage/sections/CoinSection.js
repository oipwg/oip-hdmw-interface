import React from 'react'
import _ from 'lodash'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const CoinSection = (props) => {
	const {classes, wallet, fn} = props
	
	return <div className={classes.sectionCoins}>
		{Object.keys(wallet.getCoins()).map((coin, i) => {
			return (
				<Card key={i} className={classes.coinCard}>
					<ButtonBase className={classes.cardButtonBase} onClick={() => {
						fn.handleCoinCardClick(coin)
					}}>
						<CardContent>
							<Typography className={classes.coinTypography}>
								{_.toUpper(coin)}
							</Typography>
						</CardContent>
					</ButtonBase>
				</Card>
			)
		})}
		<Card className={`${classes.coinCard}`}>
			<ButtonBase className={classes.cardButtonBase} disabled={true} onClick={() => {
				console.log('Extra Coins')
			}}>
				<CardContent>
					<Typography className={classes.extraCoinTypography}>
						Extra Coins Coming Soon
					</Typography>
				</CardContent>
			</ButtonBase>
		</Card>
	</div>
}

export default CoinSection
