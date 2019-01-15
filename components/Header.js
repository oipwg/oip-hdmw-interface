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
		width: '100%',
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
	// search: {
	// 	position: 'relative',
	// 	borderRadius: theme.shape.borderRadius,
	// 	backgroundColor: fade(theme.palette.common.white, 0.15),
	// 	'&:hover': {
	// 		backgroundColor: fade(theme.palette.common.white, 0.25),
	// 	},
	// 	marginRight: theme.spacing.unit * 2,
	// 	marginLeft: 0,
	// 	width: '100%',
	// 	[theme.breakpoints.up('sm')]: {
	// 		marginLeft: theme.spacing.unit * 3,
	// 		width: 'auto',
	// 	},
	// },
	// searchIcon: {
	// 	width: theme.spacing.unit * 9,
	// 	height: '100%',
	// 	position: 'absolute',
	// 	pointerEvents: 'none',
	// 	display: 'flex',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// },
	// inputRoot: {
	// 	color: 'inherit',
	// 	width: '100%',
		// borderLeft: '0.1em solid #d3d3d3',
		// borderRight: '0.1em solid #d3d3d3',
	// },
	// inputInput: {
	// 	paddingTop: theme.spacing.unit,
	// 	paddingRight: theme.spacing.unit,
	// 	paddingBottom: theme.spacing.unit,
	// 	paddingLeft: theme.spacing.unit * 10,
	// 	transition: theme.transitions.create('width'),
	// 	width: '100%',
	// 	[theme.breakpoints.up('md')]: {
	// 		width: 200,
	// 	},
	// },
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
	const {classes, redirectUrl} = props;

	return (
		<div className={classes.root}>
			<AppBar position="static" color={'default'} classes={{colorDefault: classes.colorDefault}}>
				<Toolbar>
					<Typography  variant="h6" color="inherit" noWrap>
						<Link prefetch href={"/"}>
							<a className={classes.title}>OIP-HDMW</a>
						</Link>
					</Typography>

					<div className={classes.grow}/>
					{/*<div className={classes.search}>*/}
						{/*<div className={classes.searchIcon}>*/}
							{/*<SearchIcon/>*/}
						{/*</div>*/}
						{/*<InputBase*/}
							{/*placeholder="Search…"*/}
							{/*classes={{*/}
								{/*root: classes.inputRoot,*/}
								{/*input: classes.inputInput,*/}
							{/*}}*/}
						{/*/>*/}
					{/*</div>*/}
					{/*<div className={classes.grow}/>*/}

					<div className={classes.sectionDesktop}>
						<Link prefetch href={{pathname: '/public/login', query: {redirectUrl}}}>
							<a className={classes.loginLink}>Login</a>
						</Link>
					</div>
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