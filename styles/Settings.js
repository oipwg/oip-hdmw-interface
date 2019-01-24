const styles = theme => ({
	settingsContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
		padding: '20px 50px',
	},
	settingsHeader: {
		display: 'flex',
		flexDirection: 'row',
		flex: '0 1 50px',
		color: theme.palette.primary.light,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	settingsHeaderTitle: {
		fontSize: '24px',
		fontWeight: 'bold',
	},
	settingsBody: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
	},
})

export default styles

