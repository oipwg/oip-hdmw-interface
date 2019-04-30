import {SheetsRegistry} from 'react-jss';
import {createGenerateClassName} from '@material-ui/core/styles';

function createPageContext() {
	return {
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
