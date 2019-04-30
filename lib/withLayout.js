import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from 'oip-react'
import withStyles, {ThemeProvider} from 'react-jss'
import Notifier from '../components/shared/Notifier';
import Header from '../components/shared/Header';

import getContext from './context';
import {themePalette} from "../styles/themePalette";

function withLayout(BaseComponent) {
    const WithLayout = (props) => {
        let {pageContext} = props;
        if (!pageContext) {
            pageContext = getContext();
        }

        const {theme} = useTheme({palettes: themePalette}, 'dark')
        console.log(theme)
        useEffect(() => {
            const jssStyles = document.querySelector('#jss-server-side');
            if (jssStyles && jssStyles.parentNode) {
                jssStyles.parentNode.removeChild(jssStyles);
            }
        }, [])

        const styles = {
            root: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: theme.palette.background.main,
                color: theme.palette.text.main
            }
        }

        return <ThemeProvider theme={theme}>
            <div className={'__root__'} style={styles.root}>
                    <Header {...props} />
                    <BaseComponent {...props} />
                    <Notifier />
            </div>
        </ThemeProvider>
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

    return WithLayout
}

export default withLayout;