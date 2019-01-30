const styles = theme => ({
	settingsWrapper: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
	},
	settingsContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
		padding: '20px 50px',
	},
	settingContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	settingHeader: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: '10px 0px',
		borderBottom: '1px solid lightgrey',
		marginBottom: '20px',
	},
	settingRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: '3px 5px',
		fontWeight: 'bold',
		// color: theme.palette.primary.light,
		color: '#474a54',
	},
	settingCheckboxLeft: {
		marginRight: '10px',
	},
})

export default styles

