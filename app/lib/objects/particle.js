import THREE from 'three';

function create() {
	const geom = new THREE.SphereGeometry(1);
	const material = new THREE.MeshBasicMaterial({color: 0xffffff});
	return new THREE.Mesh(geom, material);
}

function update(particle, x, y, z) {
	particle.position.setX(x);
	particle.position.setY(y);
	particle.position.setZ(z);
}

export default {
	create,
	update
}
