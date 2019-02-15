require('dotenv').config()
const customDomain = 'oiphdmw.com'

function getRootUrl() {
	const port = process.env.PORT || 7000;
	const dev = process.env.NODE_ENV !== 'production';
	console.log('is dev', dev, process.env.NODE_ENV)
	return dev ? `http://localhost:${port}` : `http://localhost:${port}`;
}

module.exports = {
	getRootUrl
}