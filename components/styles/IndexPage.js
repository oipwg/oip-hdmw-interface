const styles = theme => ({
	root: {
		height: `calc(100% - 64px)`,
		display: 'flex',
		flexDirection: 'row',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	rootTable: {
		width: '100%',
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
	sectionCoins: {
		width: '30%',
		flexDirection: 'column',
		// backgroundColor: 'red',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexDirection: 'row',
			width: '100%',
			height: '10%'
		},
	},
	sectionAddresses: {
		width: '60%',
		flexDirection: 'column',
		overflowY: 'auto',
		// backgroundColor: 'blue',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			width: '100%',
			order: '3',

		},
	},
	sectionAccounts: {
		width: '30%',
		flexDirection: 'column',
		overflowY: 'auto',
		// backgroundColor: 'green',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexDirection: 'row',
			width: '100%',
			height: '10%',
			overflowX: 'auto'
		},
	},
	coinCard: {
		display: 'flex',
		height: '25%',
		justifyContent: 'center',
		alignItems: 'Center',
		borderRadius: '0px',
		[theme.breakpoints.down('sm')]: {
			width: '25%',
			height: '100%'
		},
	},
	coinTypography: {
		fontSize: '25px',
		color: theme.palette.primary,
		[theme.breakpoints.down('sm')]: {
			fontSize: '16px',
		},
	},
	extraCoinTypography: {
		color: theme.palette.error.main
	},
	cardButtonBase: {
		width: '100%',
		height: '100%',
	}
})

export default styles