import React from 'react';
import Link from 'next/link';
import {withRouter} from 'next/router';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		height: '70px',
		color: theme.palette.primary.main,
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	colorDefault: {
		backgroundColor: 'white'
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	title: {
		color: theme.palette.primary.main,
		fontWeight: '600',
		// display: 'none',
		// [theme.breakpoints.up('sm')]: {
		// 	display: 'block',
		// },
	},
	loginLink: {
		fontWeight: 'bold',
		margin: '0px 20px 0px auto',
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	}
});

function Header(props) {
	const {classes} = props;

	return (
		<div className={classes.root}>
			<AppBar position="static" color={'default'} classes={{colorDefault: classes.colorDefault}} >
				<Toolbar >
					<Typography  variant="h6" color="inherit" noWrap>
						<Link href={"/public/load"} as={'/load'}>
							<a className={classes.title}>oip hdmw</a>
						</Link>
					</Typography>

					<div className={classes.grow}/>
					<div className={classes.sectionMobile}>
						{/*...*/}
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	router: PropTypes.shape({
		asPath: PropTypes.string.isRequired,
	}).isRequired,
};
Header.defaultProps = {
	redirectUrl: ''
};
export default withStyles(styles)(withRouter(Header));
