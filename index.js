var express = require('express')
	, app = express()
	;
	
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var subscriber = require('./lib/subscriber.js');

const PORT = 6000;
subscriber.connect(PORT);

io.on('connection', (socket) => {
	subscriber.on((message) => {
		socket.emit('state', message);
	});
});

app.use(express.static('app'));

server.listen(9000);
