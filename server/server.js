import express from 'express'
import next from 'next'
import path from 'path'
import helmet from 'helmet'
require('dotenv').config()

import logger from './logs'
const {getRootUrl} = require(path.resolve('./', 'lib/api/getRootUrl'))

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 7000;

const ROOT_URL = getRootUrl()

const app = next({ dev });
const handle = app.getRequestHandler();

const URL_MAP = {
	// example URL_MAP
	'/load': '/public/load'
};

app.prepare().then(() => {
	const server = express()
	server.use(helmet())
	if (!dev) {
		server.set('trust proxy', 1);
	}
	
	server.get('*', (req, res) => {
		const url = URL_MAP[req.path];
		if (url) {
			const {query} = req.query
			app.render(req, res, url, query);
		} else {
			handle(req, res);
		}
	});

	server.listen(port, (err) => {
		if (err) throw err;
		logger.info(`> Ready on ${ROOT_URL}`);
	});

});


