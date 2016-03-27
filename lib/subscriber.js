var zmq = require('zmq')
	, log = require('bunyan').createLogger({name:"world_viewer/subscriber"});
const sock = zmq.socket('sub');

module.exports = {
	connect: (port) => {
		sock.connect('tcp://127.0.0.1:' + port);
		log.info('Subscriber connected on port ' + port);

		sock.subscribe('');
		log.info('Subscribed');
	},
	on: (handler) => {
		sock.on('message', (message) => {
			log.info('Received ', message.toString());
			handler(message.toString());
		});
	}
}
