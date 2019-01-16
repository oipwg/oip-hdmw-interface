const getStyles = (theme) => {
const coinSection = {
	sectionCoins: {
		width: '20%',
		padding: '5px',
		flexDirection: 'column',
		// backgroundColor: 'red',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexDirection: 'row',
			width: '100%',
			height: '10%'
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
}

const addressSection = {
	sectionAddresses: {
		width: '40%',
		padding: '5px',
		flexDirection: 'column',
		overflowY: 'auto',
		// backgroundColor: 'blue',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			width: '100%',
			// order: '3',
			
		},
	},
	rootTable: {
		width: '100%',
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
}

const accountSection = {
	sectionAccounts: {
		padding: '5px',
		width: '10%',
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
}

const txSection = {
	sectionTX: {
		padding: '5px',
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
}

const mixedStyles = {
	cardButtonBase: {
		width: '100%',
		height: '100%',
	}
}

const root = {
	root: {
		height: `calc(100% - 64px)`,
		display: 'flex',
		flexDirection: 'row',
		padding: '20px',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	renderWalletRoot: {
		display: 'inherit',
		flexDirection: 'inherit',
		width: '100%',
		height: '100%'
	},
}

return {
	...root,
	...coinSection,
	...accountSection,
	...addressSection,
	...txSection,
	...mixedStyles,
}
}

const styles = theme => (getStyles(theme))

export default styles