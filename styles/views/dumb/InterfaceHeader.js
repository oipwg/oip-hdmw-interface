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
})

export default styles