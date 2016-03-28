import THREE from 'three';

function create() {
	const geom = new THREE.SphereGeometry(1);
	const material = new THREE.MeshBasicMaterial({color: 0xffffff});
	return new THREE.Mesh(geom, material);
}

export default {
	create
}
