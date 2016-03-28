var zmq = require('zmq')
	, log = require('bunyan').createLogger({name:"world_viewer/subscriber"})
	, registry = require('service_js')
	;

const sock = zmq.socket('sub');

module.exports = {
	connect: (registry_host) => {
		return new Promise( (resolve, reject) => {
			registry
			.whereis("world", registry_host)
			.then( (serviceObj) => {
				const endpoint = `tcp://${serviceObj.hostname}:${serviceObj.port}`;
				sock.connect(endpoint);
				log.info('Subscriber connected on ' + endpoint);
				sock.subscribe('');
				log.info('Subscribed');
				resolve();
			})
			.catch( (err) => {
				log.info(err);
				log.info("Not able to retrieve world service from registry: " + registry_host);
				reject();
			});
		});
	},
	on: (handler) => {
		sock.on('message', (message) => {
			log.info('Received ', message.toString());
			handler(message.toString());
		});
	}
}
