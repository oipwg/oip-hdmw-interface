import React, {useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Wallet} from 'oip-hdmw'
import bip39 from 'bip39'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Modal from '@material-ui/core/Modal'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {Lock} from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

//hocs
import withLayout from '../../lib/withLayout'
//styles
import LoadFormStyles from '../../styles/loadPage/Load'
import LoadWarningModalStyles from '../../styles/loadPage/LoadWarningModal'
//actions
import {setMnemonic} from '../../redux/actions/HDMW/creators'

let LoadWarning = (props) => {
	const {open, classes, mnemonic, setLoadWarning, setMnemonic} = props
	
	return <Modal open={open} className={classes.modal}>
		<Paper className={`${classes.paper}`} >
			<Typography color="error" align={'center'} className={classes.cautionTyp}>CAUTION</Typography>
			<Typography color="primary" align={"center"} paragraph={true} className={classes.warningTyp}>
				This mnemonic is your KEY. DO NOT LOSE THIS. Burn it into your mind. Write it down.
				Store it, save it, hide it, but do not forget it. It is your wallet.
			</Typography>
			<Typography color="error" align={'center'} paragraph={true} className={classes.mnemonicTyp}>{mnemonic}</Typography>
			<Link href='/'>
				<Button
					className={`${classes.continueButtons} ${classes.continueButton}`}
					variant={'contained'}
					color={'primary'}
					onClick={() => {
						setMnemonic(mnemonic)
					}}
				>I understand</Button>
			</Link>
			<Button
				className={`${classes.continueButtons} ${classes.cancelButton}`}
				variant={'contained'}
				onClick={(e) => {
					e.preventDefault()
					setLoadWarning(false)
				}}
			>
				Cancel
			</Button>
		</Paper>
	</Modal>
}

const mapDispatchToProps = {
	setMnemonic
}

// noinspection JSValidateTypes
LoadWarning = connect(undefined, mapDispatchToProps)(withStyles(LoadWarningModalStyles)(LoadWarning))

function LoadForm(props) {
	const {classes} = props
	
	const [mnemonic, setMnemonic] = useState('');
	const [displayLoadWarning, setLoadWarning] = useState(false)
	
	const generateMnemonic = (e) => {
		e.preventDefault()
		let wallet = new Wallet(undefined, {discover: false})
		let mnemonic = wallet.getMnemonic()
		setMnemonic(mnemonic)
	}
	
	const lockLoadButton = !bip39.validateMnemonic(mnemonic);
	
	return (
		<main className={classes.main}>
			<Head>
				<title>oip-hdmw</title>
				<meta name="description" content="load a bip 44 hdmw (hierarchical deterministic multi-wallet) from open index protocol (OIP)"/>
			</Head>
			<Paper className={classes.paper}>
				<Lock className={classes.lockIcon}/>
				<Typography component="h1" variant="h5" align={'center'}>
					Enter a Mnemonic to Load Your Wallet
				</Typography>
				<form className={classes.form}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">Mnemonic</InputLabel>
						<Input id="mnemonic" name="mnemonic" autoComplete="mnemonic" autoFocus
						       // type={'password'}
						       value={mnemonic}
						       onChange={(e) => setMnemonic(e.target.value)}
						/>
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={(e) => {
							e.preventDefault();
							setLoadWarning(true)
						}}
						disabled={lockLoadButton}
					>
						Load Wallet
					</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						// disableFocusRipple={true}
						// disableRipple={true}
						className={`${classes.submit} ${classes.gmButton}`}
						onClick={(e) => {
							generateMnemonic(e)
						}}
					>
						Generate Mnemonic
					</Button>
				</form>
				<LoadWarning
					open={displayLoadWarning}
					mnemonic={mnemonic}
					setLoadWarning={setLoadWarning}
				/>
				<Typography align={'center'} className={classes.aboutTyp}>
					If you don't know what a mnemonic is, or want to know more about this wallet,
					see our <Link href='/public/about' as={'/about'} ><a className={classes.aboutLink}>About Page</a></Link>.
				</Typography>
			</Paper>
		</main>
	);
}

LoadForm.getInitialProps = async ({reduxStore}) => {
	console.log('LoadForm.getInitialProps')
	return {}
}

LoadForm.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withLayout(withStyles(LoadFormStyles)(LoadForm))
