import {SheetsRegistry} from 'react-jss';
import {createMuiTheme, createGenerateClassName} from '@material-ui/core/styles';
import {grey, green, red} from '@material-ui/core/colors'

const theme = createMuiTheme({
	// shadows: ["none"],
	props: {
		MuiAppBar: {
			elevation: 0
		},
	},
	overrides: {
		MuiAppBar: {
			root: {
				display: 'flex'
			},
		}
	},
	palette: {
		primary: {
			light: grey[400],
			main: grey[900],
			dark: grey[700]
		},
		secondary: {
			light: green[400],
			main: green[700],
			dark: green[900]
		},
		error: {
			light: red[400],
			main: red[700],
			dark: red[900],
		},
	},
	typography: {
		fontFamily: [
			// 'Hammersmith One',
			// 'Mitr',
			// 'Varela',
			// 'Josefin Sans',
			// 'Working Sans',
			'Arial',
			'Multi',
			'Helvetica',
			'Roboto',
			'sand-serif'
		].join(','),
		font10: '10px',
		font20: '20px',
		font30: '30px',
		font40: '40px',
		font50: '50px',
	},
});

function createPageContext() {
	return {
		theme,
		sheetsManager: new Map(),
		sheetsRegistry: new SheetsRegistry(),
		generateClassName: createGenerateClassName(),
	};
}

export default function getContext() {
	if (!process.browser) {
		return createPageContext();
	}

	if (!global.INIT_MATERIAL_UI) {
		global.INIT_MATERIAL_UI = createPageContext();
	}

	// console.log('INIT_MATERIAL_UI: ', global.INIT_MATERIAL_UI)

	return global.INIT_MATERIAL_UI;
}
