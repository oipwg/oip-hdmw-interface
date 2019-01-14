import React from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import getContext from './context';
import Header from '../components/Header';

function withLayout(BaseComponent) {
	class WithLayout extends React.Component {
		constructor(props) {
			super(props);
			const {pageContext} = this.props;
			this.pageContext = pageContext || getContext();
		}

		componentDidMount() {
			const jssStyles = document.querySelector('#jss-server-side');
			if (jssStyles && jssStyles.parentNode) {
				jssStyles.parentNode.removeChild(jssStyles);
			}
		}

		render() {
			return (
				<MuiThemeProvider
					theme={this.pageContext.theme}
					sheetsManager={this.pageContext.sheetsManager}
				>
					<CssBaseline/>
					<div style={{height: '100%'}}>
						<Header {...this.props} />
						<BaseComponent {...this.props} />
					</div>
				</MuiThemeProvider>
			);
		}
	}

	WithLayout.propTypes = {
		pageContext: PropTypes.object, // eslint-disable-line
	};

	WithLayout.defaultProps = {
		pageContext: null,
	};

	return WithLayout;
}

export default withLayout;