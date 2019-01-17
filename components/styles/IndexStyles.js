const getStyles = (theme) => {
	const coinSection = {
		sectionCoins: {
			width: '20%',
			flexDirection: 'column',
			// backgroundColor: 'red',
			// [theme.breakpoints.down('sm')]: {
			// 	display: 'flex',
			// 	flexDirection: 'row',
			// 	width: '100%',
			// 	height: '10%'
			// },
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
			flexDirection: 'column',
			overflowY: 'auto',
			// backgroundColor: 'blue',
			// [theme.breakpoints.down('sm')]: {
			// 	display: 'flex',
			// 	width: '100%',
			// 	// order: '3',
			//
			// },
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
			width: '10%',
			flexDirection: 'column',
			overflowY: 'auto',
			// backgroundColor: 'green',
			// [theme.breakpoints.down('sm')]: {
			// 	display: 'flex',
			// 	flexDirection: 'row',
			// 	width: '100%',
			// 	height: '10%',
			// 	overflowX: 'auto'
			// },
		},
	}
	
	const txSection = {
		sectionTX: {
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
	
	const sectionWrapper = {
		sectionWrapper: {
			maxHeight: '100%',
			overflow: 'hidden',
			display: 'flex',
			flexDirection: 'row',
			flex: '1 1 auto',
		},
	}
	
	const walletHeader = {
		walletHeader: {
			display: 'flex',
			flexDirection: 'row',
			flex: '0 0 54px',
			padding: '0px 20px',
			borderBottom: '1px solid rgb(218, 225, 233)',
			backgroundColor: 'white',
			color: theme.palette.primary.main,
			alignItems: 'center',
		}
	}
	
	const root = {
		contentContainer: {
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			flex: '1 1 auto',
			// [theme.breakpoints.down('sm')]: {
			// 	//
			// },
		},
		walletContainer: {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '717px',
			flex: '0 0 calc(100vh - 70px)',
			backgroundColor: 'rgb(244, 247, 250)',
			padding: '0px 25px',
			alignItems: 'center',
		},
		contentLayout: {
			display: 'flex',
			flexDirection: 'column',
			width: '1180px',
			height: '100%',
			maxHeight: '100%',
			flex: '1 1 0%',
			margin: '0',
			padding: '25px 0px',
		},
		paperLayout: {
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: 'rgb(244, 247, 250)',
			height: '100%',
			maxHeight: '100%',
			flex: '1 1 0%',
			overflow: 'hidden',
		},
	}

	
	return {
		...root,
		...walletHeader,
		...sectionWrapper,
		...coinSection,
		...accountSection,
		...addressSection,
		...txSection,
		...mixedStyles,
	}
}

const styles = theme => (getStyles(theme))

export default styles