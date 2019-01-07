import React from 'react'
import Head from 'next/head';
import withLayout from '../lib/withLayout';

class Index extends React.Component {
	render() {
		return (
			<div style={{padding: '10px 45px'}}>
				<Head>
					<title>Nextjs Webapp</title>
					<meta name="description" content="Boilerplate code for nextjs"/>
				</Head>
			</div>
		)
	}
}

export default withLayout(Index);