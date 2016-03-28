import THREE from 'three';

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

export function camera_init() {
	// position and point the camera to the center of the scene
	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 150;
}

export default camera;
