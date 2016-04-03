import THREE from 'three';

// create a render and set the size
const webGLRenderer = new THREE.WebGLRenderer();

export function renderer_init() {
	webGLRenderer.setClearColor(new THREE.Color(0x000000, 1.0));
	webGLRenderer.setSize(window.innerWidth, window.innerHeight);
}

export function renderer_resize(width, height) {
	webGLRenderer.setSize(width, height);
}

export default webGLRenderer;
