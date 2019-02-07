const styles = theme => ({
	createTXContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
	},
	createTXHeader: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		flex: '0 0 50px',
	},
	sendBody: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
		padding: '20px 50px',
	},
	sendCoinSelection: {
		display: 'flex',
		flexDirection: 'row',
	},
	fieldRow: {
		display: 'flex',
		flexDirection: 'row',
		flex: '0 1 50px',
		alignItems: 'center',
	},
	fieldTitle: {
		color: theme.palette.primary.light,
		marginRight: '15px',
		fontWeight: 'bold',
		width: '70px',
	},
	sendInputField: {
		width: '60%',
	},
	sendButton: {
		backgroundColor: 'black',
		color: 'white',
		fontWeight: 'bold',
	},
	sendAmountInputField: {
		padding: '6px',
	},
	floDataInputField: {
		width: '80%',
		padding: '6px',
	},
	sendAddressInputField: {
		padding: '6px',
		width: '283px'
	},
})

export default styles