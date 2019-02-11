const styles = theme => ({
	interfaceHeader: {
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
	balanceDisplayText: {
		fontWeight: 'bold',
	},
	balanceData: {
		marginLeft: '10px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	tooltip: {
		marginLeft: '10px',
		position: 'relative',
		display: 'inline-block',
		cursor: 'default',
		'& $tooltiptext': {
			visibility: 'hidden',
			width: '300px',
			backgroundColor: 'black',
			color: 'white',
			cursor: 'default',
			textAlign: 'center',
			fontSize: '14px',
			
			position: 'absolute',
			zIndex: '1',
			top: '-25px'
		},
		'&:hover $tooltiptext': {
			visibility: 'visible',
		},
	},
	tooltiptext: {},
})

export default styles