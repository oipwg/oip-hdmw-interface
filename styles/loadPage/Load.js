const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
			width: 320,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		marginTop: theme.spacing(3),
		fontWeight: 'bold',
	},
	gmButton: {
		backgroundColor: theme.palette.primary.dark,
		color: 'white',
	},
	lockIcon: {
		margin: '25px 0px',
		fontSize: '30px'
	},
	aboutTyp: {
		marginTop: '25px',
		marginBottom: '8px',
		fontSize: '12px',
	},
	aboutLink: {
		color: theme.palette.error.dark,
		fontWeight: 'bold',
	}
});

export default styles
