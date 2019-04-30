import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import JssProvider from 'react-jss';
import getContext from '../lib/context';

class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="google" content="notranslate" />
				<meta name="theme-color" content="#1976D2" />

				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Muli:300,400:latin"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Josefin+Sans:700,600,500,400,300|Work+Sans:600, 500, 400, 300"
					rel="stylesheet"/>
				<link
					rel="stylesheet"
					href="https://storage.googleapis.com/builderbook/nprogress.min.css"
				/>
				<link rel="stylesheet" href="https://storage.googleapis.com/builderbook/vs.min.css" />
				<link href="https://fonts.googleapis.com/css?family=Hammersmith+One|Mitr|Varela" rel="stylesheet" />
				<style>
					{`
						html, body {
							height: 100%;
							margin: 0;
							padding: 0;
						}
					   #__next {
						  height: 100%;
						  display: flex;
					  }
            		`}
				</style>
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
			</html>
		);
	}
}

MyDocument.getInitialProps = ({ renderPage }) => {
	const pageContext = getContext();
	const page = renderPage(Component => props =>  {
		return (
			<JssProvider
				registry={pageContext.sheetsRegistry}
				generateClassName={pageContext.generateClassName}
			>
				<Component pageContext={pageContext} {...props} />
			</JssProvider>
		)
	}
	);

	return {
		...page,
		pageContext,
		styles: (
			<style
				id="jss-server-side"
				// eslint-disable-next-line
				dangerouslySetInnerHTML={{
					__html: pageContext.sheetsRegistry.toString(),
				}}
			/>
		),
	};
};

export default MyDocument;