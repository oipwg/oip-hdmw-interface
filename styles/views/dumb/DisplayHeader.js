const styles = theme => ({
	displayHeader: {
		display: 'flex',
		flexDirection: 'row',
		flex: '0 0 50px',
		// backgroundColor: 'green',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: '0px 16px 0px 24px',
		borderBottom: '1px solid rgb(218, 225, 233)',
	},
	viewLink: {
		padding: '0px 10px',
		color: theme.palette.primary.dark,
	},
})

export default styles