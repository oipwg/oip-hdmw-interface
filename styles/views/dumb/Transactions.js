const styles = theme => ({
	transactionsContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
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
		maxHeight: '70px',
		cursor: 'pointer',
		flex: '0 0 70px',
		padding: '20px',
		borderBottom: '1px solid rgb(218, 225, 233)',
	},
	transactionsHeader: {
		display: 'flex',
		flexDirection: 'row',
		flex: '0 1 50px',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '5px 15px',
		borderBottom: '1px solid rgb(218, 225, 233)'
	},
})

export default styles