import React from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Notifier from '../components/Notifier';
import {withStyles} from '@material-ui/core/styles';

import getContext from './context';
import Header from '../components/Header';

function withLayout(BaseComponent) {
	class WithLayout extends React.Component {
		constructor(props) {
			super(props);
			const {pageContext} = this.props;
			this.pageContext = pageContext || getContext();
			
			this.styles = {
				__root__: {
					display: 'flex',
					flexDirection: 'row',
					flex: '1 1 auto'
				},
				__layoutContainer__ : {
					minHeight: '100vh',
					backgroundColor: 'rgb(255, 255, 255)',
					display: 'flex',
					flexDirection: 'column',
					flex: '1 1 auto',
				},
				__layoutDesktop__ : {
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
					flex: '1 1 auto',
				},
			}
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
					<div className="__root__" style={this.styles.__root__}>
						<div className="__layoutContainer__" style={this.styles.__layoutContainer__}>
							<div className="__layoutDesktop__" style={this.styles.__layoutDesktop__}>
								<Header {...this.props} />
								<BaseComponent {...this.props} />
								<Notifier />
							</div>
						</div>
					</div>
				</MuiThemeProvider>
			);
		}
	}
	
	WithLayout.getInitialProps = (ctx) => {
		if (BaseComponent.getInitialProps) {
			// console.log('BaseComponent has Init props')
			return BaseComponent.getInitialProps(ctx);
		}
		
		return {};
	};

	WithLayout.propTypes = {
		pageContext: PropTypes.object, // eslint-disable-line
	};

	WithLayout.defaultProps = {
		pageContext: null,
	};

	return WithLayout;
}

export default withLayout;