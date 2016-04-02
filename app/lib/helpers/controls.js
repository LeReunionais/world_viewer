import dat from 'dat-gui';

import camera from '../camera.js';

const gui = new dat.GUI();

const cameraFolder = gui.addFolder('Camera');
cameraFolder.add(camera.position, 'x'); 
cameraFolder.add(camera.position, 'y'); 
cameraFolder.add(camera.position, 'z'); 

export default gui;
