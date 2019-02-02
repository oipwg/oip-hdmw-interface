const styles = theme => ({
	transactionWrapper: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
	},
	transactionsContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
	},
	transactionRowContainer: {
		display: 'flex',
		flexDirection: 'column',
	},
	transactionRow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		maxHeight: '88px',
		color: 'rgb(155, 166, 178)',
		// cursor: 'pointer',
		padding: '20px',
		flex: '0 0 88px',
		borderBottom: '1px solid rgb(218, 225, 233)',
		transition: 'backgroundColor 0.25s ease 0s',
		fontFamily: 'monospace',
		alignItems: 'center',
	},
	noTransactionsFound: {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1 auto',
		justifyContent: 'center',
		alignItems: 'flex-start',
		fontWeight: 'bold',
		fontSize: '30px',
		color: 'lightGrey',
	},
})

export default styles