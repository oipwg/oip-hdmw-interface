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
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '5px 15px',
		borderBottom: '1px solid rgb(218, 225, 233)'
	},
	txAsyncData: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	refreshTransactions: {
		cursor: 'pointer',
	},
	transactionsListContainer: {
		overflowY: 'auto'
	},
	transactionRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		flex: '0 0 88px',
		minHeight: '88px',
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
	showMoreLess: {},
	textOverflowContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	floDataContainer: {
		width: '600px',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		wordBreak: 'break-word',
	},
	floDataText: {},
	flexRowMiddle: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	reactLoaderContainer: {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1 auto',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default styles