var express = require('express')
	, app = express()
	;
	
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var subscriber = require('./lib/subscriber.js');

var REGISTRY_HOST = process.env.REGISTRY_HOST;
if (REGISTRY_HOST === undefined || REGISTRY_HOST === '') {
	throw new Error('REGISTRY_HOST environment variable was not defined. Please define it.');
}

io.on('connection', (socket) => {
	subscriber.connect(REGISTRY_HOST);
	subscriber.on((message) => {
		socket.emit('state', message);
	});
});
app.use(express.static('app'));

server.listen(9000, () => {
	console.log("Listening on port 9000");
});


