const styles = theme => ({
	transactionsContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
	},
	transactionsHeader: {
		display: 'flex',
		flexDirection: 'row',
		flex: '0 0 50px',
		justifyContent: 'flex-end',
		alignItems: 'center',
		padding: '5px 15px',
		borderBottom: '1px solid rgb(218, 225, 233)'
	},
	refreshTransactions: {
	
	},
	transactionsListContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
		overflowY: 'auto'
	},
	transactionRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		maxHeight: '88px',
		flex: '0 0 88px',
		padding: '10px',
		fontSize: '12px',
		borderBottom: '1px solid rgb(218, 225, 233)',
	},
	txFloDataContainer: {
		display: 'flex',
		flexDirection: 'column',
	},
	txTimeAmountContainer: {
		display: 'flex',
		flexDirection: 'column',
		padding: '20px',
		alignItems: 'flex-end',
	},
	transactionDateContainer: {},
	transactionId: {
		color: 'rgb(218, 225, 233)',
	},
	floDataTitle: {
		color: 'blue',
	},
	floDataText: {},
	
	reactLoaderContainer: {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1 auto',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default styles