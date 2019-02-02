const styles = theme => ({
	paper: {
		position: 'absolute',
		minWidth: '50%',
		maxWidth: '80%',
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		outline: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		marginTop: '150px',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 'auto',
		bottom: '50%'
	},
	cautionTyp: {
		fontWeight: 'bold',
		fontSize: '33px'
	},
	warningTyp: {
		fontSize: '16px',
		fontWeight: 'bold',
		
	},
	mnemonicTyp: {
		fontSize: '20px',
		fontWeight: 'bold',
	},
	continueButtons: {
		minWidth: '30%',
		maxWidth: '50%',
		margin: '10px',
		color: 'white',
		fontWeight: 'bold',
	},
	continueButton: {
		backgroundColor: theme.palette.primary.main,
		
	},
	cancelButton: {
		backgroundColor: theme.palette.error.dark,
	}
})

export default styles