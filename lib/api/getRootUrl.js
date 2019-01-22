require('dotenv').config()
const customDomain = 'myDomain'

export default function getRootURL() {
	const port = process.env.PORT || 7000;
	const dev = process.env.NODE_ENV !== 'production';
	return dev ? `http://localhost:${port}` : `${customDomain}`;
}