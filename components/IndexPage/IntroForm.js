import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Wallet} from 'oip-hdmw'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {Lock} from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


function IntroForm(props) {
	const {classes, loadWallet} = props

	const [mnemonic, setMnemonic] = useState('');
	const generateMnemonic = (e) => {
		e.preventDefault()
		let wallet = new Wallet(undefined, {discover: false})
		let mnemonic = wallet.getMnemonic()
		setMnemonic(mnemonic)
	}

	const displayWarning = (e) => {
		e.preventDefault()
		// display warning

		//accept/decline
		loadWallet(mnemonic)
	}

	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Lock className={classes.lockIcon}/>
				<Typography component="h1" variant="h5" align={'center'}>
					Enter a Mnemonic to Load Your Wallet
				</Typography>
				<form className={classes.form}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">Mnemonic</InputLabel>
						<Input id="mnemonic" name="mnemonic" autoComplete="mnemonic" autoFocus
						       value={mnemonic}
						       onChange={(e) => setMnemonic(e.target.value)}
						/>
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						className={`${classes.submit} ${classes.gmButton}`}
						onClick={(e) => {
							generateMnemonic(e)
						}}
						// disabled={disableSignIn}
					>
						Generate Mnemonic
					</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={(e) => {
							displayWarning(e)
						}}
						// disabled={disableSignIn}
					>
						Load Wallet
					</Button>
				</form>
			</Paper>
		</main>
	);
}

IntroForm.propTypes = {
	classes: PropTypes.object.isRequired,
};

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 320,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
	gmButton: {
		backgroundColor: theme.palette.primary.dark,
		color: 'white'
	},
	lockIcon: {
		margin: '25px 0px',
		fontSize: '30px'
	}
});


export default withStyles(styles)(IntroForm)
