const getStyles = (theme) => {
	
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
	
	const addressSection = {
		addressContainer: {
			display: 'flex',
			flexDirection: 'column',
			flex: '1 1 0%',
			overflowY: 'auto',
		},
		addressRow: {
			display: 'flex',
			flexDirection: 'row',
			borderBottom: '1px solid rgb(218, 225, 233)',
			padding: '20px 20px',
			justifyContent: 'space-between',
			alignItems: 'center',
			minHeight: '65px',
		},
		addressInfo: {
			fontFamily: 'monospace',
			fontSize: '14px',
		},
		addressIndex: {
			color: theme.palette.primary.light,
		},
		publicAddress: {
			fontFamily: 'monospace',
			fontSize: '14px',
		},
		copyToClipBoard: {
			cursor: 'copy',
			fontSize: '18px',
		},
		showExtraAddressContainer: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			padding: '10px',
			minHeight: '65px',
		},
		showExtraAddress: {
			border: '1px solid grey',
			padding: '5px 20px',
			borderRadius: '3px',
			fontSize: '12px',
			marginLeft: '15px',
			cursor: 'pointer',
		},
	}
	
	const accountSection = {
		sectionAccounts: {
			alignItems: 'center',
		},
		accountNumber: {
			fontWeight: 'bold',
			fontSize: '20px',
			padding: '0px 20px',
			cursor: 'pointer',
			textDecoration: 'none',
		},
		accountSelected: {
			fontSize: '23px',
		},
		addAccountButton: {
			cursor: 'pointer',
			textDecoration: 'none',
		},
	}
	
	const detailsHeader = {
		detailsHeader: {
			display: 'flex',
			flexDirection: 'row',
			flex: '0 0 50px',
			// backgroundColor: 'green',
			justifyContent: 'flex-start',
			alignItems: 'center',
			padding: '0px 16px 0px 24px',
			borderBottom: '1px solid rgb(218, 225, 233)',
		},
		viewLink: {
			padding: '0px 10px',
			color: theme.palette.primary.dark,
		},
		detailsSearch: {
			marginLeft: 'auto',
		},
	}
	
	const displayBody = {
		displayWrapper: {
			display: 'flex',
			flexDirection: 'column',
			flex: '1 1 auto',
			// backgroundColor: 'blue',
		},
		displayContainer: {
			display: 'flex',
			flexDirection: 'column',
			flex: '1 1 0%',
			padding: '0px 24px',
		},
		displayLayout: {
			display: 'flex',
			flexDirection: 'column',
			flex: '1 1 0%',
			borderRight: '1px solid rgb(218, 225, 233)',
			borderLeft: '1px solid rgb(218, 225, 233)',
			backgroundColor: 'white',
		},
	}
	
	const sendView = {
		sendContainer: {
			display: 'flex',
			flexDirection: 'column',
			flex: '1 1 auto',
			padding: '20px 50px',
		},
		sendHeader: {
			display: 'flex',
			flexDirection: 'row',
			flex: '0 1 50px',
			color: theme.palette.primary.light,
			justifyContent: 'flex-start',
			alignItems: 'center',
		},
		sendHeaderText: {
			fontSize: '24px',
			fontWeight: 'bold',
		},
		sendBody: {
			display: 'flex',
			flexDirection: 'column',
			flex: '1 1 auto',
		},
		sendCoinSelection: {
			display: 'flex',
			flexDirection: 'row',
		},
		sendAddressRow: {
			display: 'flex',
			flexDirection: 'row',
			flex: '0 1 50px',
			alignItems: 'center',
		},
		sendTitle: {
			color: theme.palette.primary.light,
			marginRight: '15px',
			fontWeight: 'bold',
			width: '70px',
		},
		sendInputField: {
			width: '60%',
		},
		sendAmountRow: {
			display: 'flex',
			flexDirection: 'row',
			flex: '0 1 50px',
			alignItems: 'center',
		},
		sendButtonRow: {
			display: 'flex',
			flexDirection: 'row',
			flex: '0 1 50px',
			alignItems: 'center',
		},
		sendButton: {
			backgroundColor: 'black',
			color: 'white',
			fontWeight: 'bold',
		},
		sendAmountInputField: {
			padding: '6px',
			
		},
		sendAddressInputField: {
			padding: '6px',
			width: '283px'
		},
	}
	
	const detailsFooter = {
		detailsFooter: {
			display: 'flex',
			flexDirection: 'row',
			flex: '0 0 50px',
			// backgroundColor: 'red',
			justifyContent: 'flex-start',
			alignItems: 'center',
			padding: '0px 16px 0px 24px',
			borderTop: '1px solid rgb(218, 225, 233)',
		},
		accountsTitle: {
			fontWeight: 'bold',
			padding: '0px 10px',
			marginLeft: 'auto',
			cursor: 'default'
		},
	}
	
	const detailsWrapper = {
		detailsWrapper: {
			display: 'flex',
			flexDirection: 'column',
			flex: '1 1 auto',
			// backgroundColor: 'yellow',
		},
	}
	
	const coinSection = {
		coinWrapper: {
			display: 'flex',
			flexDirection: 'row',
			flex: '0 0 300px',
		},
		coinScrollContainer: {
			display: 'flex',
			flexDirection: 'column',
		},
		coinList: {
			display: 'flex',
			flexDirection: 'column',
			overflowY: 'auto',
			'&::-webkit-scrollbar': {
				width: '0px',
			}
			// flex: '1 1 auto'
		},
		MuiCardRoot: {
			padding: '0px',
			'&:last-child': {
				paddingBottom: '0px',
			},
		},
		coinContainer: {
			display: 'flex',
			flexDirection: 'row',
			minWidth: '300px',
			minHeight: '150px',
			backgroundColor: 'white',
			justifyContent: 'center',
			alignItems: 'center',
			borderBottom: '1px solid rgb(218, 225, 233)',
		},
		cardSpace: {
			// backgroundColor: 'white',
			display: 'flex',
			flexDirection: 'column',
			flex: '1 1 auto',
			borderBottom: '1px solid rgb(218, 225, 233)',
		},
		addCoinCard: {
			marginTop: 'auto',
			display: 'flex',
			flexDirection: 'row',
			flex: '0 1 50px',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'white',
			minHeight: '50px',
		},
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
			justifyContent: 'space-between'
		},
		balanceContainer: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
		},
		refreshBalanceIcon: {
			marginLeft: '10px',
			cursor: 'pointer'
		},
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
		...detailsWrapper,
		...detailsHeader,
		...displayBody,
		...detailsFooter,
		...accountSection,
		...addressSection,
		...txSection,
		...sendView,
	}
}

const styles = theme => (getStyles(theme))

export default styles