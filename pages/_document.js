import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import JssProvider from 'react-jss/lib/JssProvider';
import getContext from '../lib/context';

class MyDocument extends Document {
	render() {
		return (
			<html lang="en" style={{height: '100%'}}>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="google" content="notranslate" />
				<meta name="theme-color" content="#1976D2" />

				<link
					rel="shortcut icon"
					href="https://storage.googleapis.com/builderbook/favicon32.png"
				/>
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
               #__next {
				  
			  }
			 a, a:focus {
                font-weight: 400;
                color: black;
                text-decoration: none;
                outline: none
              }
              a:hover, button:hover {
                opacity: 0.75;
                cursor: pointer
              }
              blockquote {
                padding: 0 1em;
                color: #555;
                border-left: 0.25em solid #dfe2e5;
              }
              pre {
                display:block;
                overflow-x:auto;
                padding:0.5em;
                background:#FFF;
                color: #000;
                border: 1px solid #ddd;
              }
              code {
                font-size: 14px;
                background: #FFF;
                padding: 3px 5px;
              }
            `}
				</style>
			</Head>
			<body
				style={{
					height: '100%',
					font: '16px Arial, Multi, Helvetica',
					color: 'black',
					margin: '0px auto',
					fontWeight: '500',
					lineHeight: '1.5em',
					backgroundColor: 'rgb(244, 247, 250)',
				}}
			>
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