const styles = theme => ({
	coinsContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: '0 0 300px',
	},
	coinsList: {
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
	coinInfoWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	coinName: {
		margin: '5px 0px',
	},
	balanceInformation: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
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
})

export default styles