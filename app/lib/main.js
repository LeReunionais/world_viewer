import io from 'socket.io-client';
import './component.css!';

import scene from './scene.js';
import camera, { camera_init } from './camera.js';
import renderer, { renderer_init } from './renderer.js';

import particle from './objects/particle.js';

import axis from './helpers/axis.js';
import './helpers/controls.js';

var socket = io.connect();

renderer_init();
// add the output of the renderer to the html element
document.body.appendChild(renderer.domElement);

camera_init();
createParticles(scene);
scene.add(axis.create());
render(scene, camera, renderer);

function createParticles(scene) {
	const sphere = particle.create();
	const updateSphere = particle.update.bind(null, sphere);
	scene.add(sphere);

	socket.on('state', (data) => {
		var positions = JSON.parse(data).particles[0].position;
		updateSphere(positions.y * 10, positions.x * 50, positions.z * 10);
	});
}

function render(scene, camera, renderer) {
	requestAnimationFrame(render.bind(this, scene, camera, renderer));
	renderer.render(scene, camera);
}
