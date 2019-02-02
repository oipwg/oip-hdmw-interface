const styles = theme => ({
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
})

export default styles