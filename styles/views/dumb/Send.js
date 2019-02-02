const styles = theme => ({
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
})