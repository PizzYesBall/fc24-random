const express = require('express');

const app = express();
const port = 4000;

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, PATCH, DELETE'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization'
	);
	next();
});

const data = require('./data');

app.use(data);

app.listen(port, () => {
	console.log(`API server listening on port ${port}`);
});
