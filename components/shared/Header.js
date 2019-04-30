import React from 'react';
import Link from 'next/link';
import {withRouter} from 'next/router';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

export const HEADER_HEIGHT = '70px'

// ratio which chroma.js uses to apply a color affect. here used to darken header
const CHROMA_MULTIPLIER = 0.5

// header shadow size. value indicates position in array of shadow sizes going from small to large
const SHADOW_SIZE = 1

const styles = theme => ({
	root: {
		height: HEADER_HEIGHT,
		backgroundColor: theme.palette.background.darken(CHROMA_MULTIPLIER),
		color: theme.palette.text.main,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		boxShadow: theme.shadows[SHADOW_SIZE]
	},
});

function Header(props) {
	const {classes} = props;

	return (
		<div className={classes.root}>

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