import io from 'socket.io-client';
import THREE from 'three';
import './component.css!';

var socket = io.connect('http://localhost:9000');


// create a scene, that will hold all our elements such as objects, cameras and lights.
var scene = new THREE.Scene();

// create a camera, which defines where we're looking at.
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// create a render and set the size
var webGLRenderer = new THREE.WebGLRenderer();
webGLRenderer.setClearColor(new THREE.Color(0x000000, 1.0));
webGLRenderer.setSize(window.innerWidth, window.innerHeight);

// position and point the camera to the center of the scene
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 150;

// add the output of the renderer to the html element
document.body.appendChild(webGLRenderer.domElement);


createParticles();
render();

function createParticles() {
	var geom = new THREE.Geometry();
	var material = new THREE.PointsMaterial({size: 1, color: 0xffffff});
	var particle = new THREE.Vector3(1, 1, 0);
	geom.vertices.push(particle);
	var system = new THREE.Points(geom, material);
	socket.on('state', (data) => {
		var positions = JSON.parse(data).particles[0].position;
		console.log(positions);
		particle.setX(positions.y * 10);
		particle.setY(positions.x * 10);
		particle.setZ(positions.z * 10);
		geom.verticesNeedUpdate = true;
	});
	scene.add(system);
}


function render() {
	requestAnimationFrame(render);
	webGLRenderer.render(scene, camera);
}

