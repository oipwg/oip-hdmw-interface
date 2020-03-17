const styles = theme => ({
	interfaceContainer: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '717px',
		flex: '0 0 calc(100vh - 70px)',
		backgroundColor: 'rgb(244, 247, 250)',
		padding: '0px 25px',
		alignItems: 'center',
	},
	interfaceWrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: '1180px',
		height: '100%',
		maxHeight: '100%',
		flex: '1 1 0%',
		margin: '0',
		padding: '25px 0px',
	},
	interfacePaperBG: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'rgb(244, 247, 250)',
		height: '100%',
		maxHeight: '100%',
		flex: '1 1 0%',
		// overflow: 'hidden',
	},
	contentWrapper: {
		maxHeight: '100%',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1 auto',
	},
})

export default styles
