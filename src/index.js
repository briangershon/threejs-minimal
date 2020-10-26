import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  TextGeometry,
  MeshBasicMaterial,
  MeshLambertMaterial,
  Mesh,
  AmbientLight,
  PointLight,
  TextureLoader,
  FontLoader,
} from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambientLight = new AmbientLight(0x404040);
scene.add(ambientLight);

const pointLight = new PointLight(0xffffff, 2);
pointLight.position.set(200, 250, 600);
pointLight.castShadow = true;
scene.add(pointLight);

const textureLoader = new TextureLoader();

const geometry = new BoxGeometry(1, 1, 1);

const material = new MeshLambertMaterial({
  color: 0x0055ff,
  opacity: 0.4,
  transparent: true,
});

const materials = [
  new MeshLambertMaterial({
    color: 0x0000ff,
    opacity: 0.4,
    transparent: true,
  }),
  new MeshLambertMaterial({
    color: 0x00ff55,
    opacity: 0.4,
    transparent: true,
  }),
  new MeshLambertMaterial({
    color: 0xff0000,
    opacity: 0.4,
    transparent: true,
  }),
  new MeshLambertMaterial({
    color: 0x0055ff,
    opacity: 0.4,
    transparent: true,
  }),
  new MeshLambertMaterial({
    color: 0x00ff55,
    opacity: 0.4,
    transparent: true,
  }),
  new MeshBasicMaterial({
    map: textureLoader.load(
      'https://threejsfundamentals.org/threejs/resources/images/wall.jpg'
    ),
  }),
];
const cube = new Mesh(geometry, materials);
scene.add(cube);

cube.position.set(0, 0, 0);

let newCube = cube.clone();
newCube.position.set(1, 1, 1);
scene.add(newCube);

newCube = cube.clone();
newCube.position.set(-1, 1, 1);
scene.add(newCube);

newCube = cube.clone();
newCube.position.set(-1, -1, -1);
scene.add(newCube);

var textMesh1;

const loader = new FontLoader();
loader.load(
  'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
  function (font) {
    let textGeo = new TextGeometry('Hi', {
      size: 2,
      height: 1,
      font: font,
    });
    textMesh1 = new Mesh(textGeo, material);
    textMesh1.position.set(3, -1, 2);
    scene.add(textMesh1);
  }
);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 0, 8);
controls.update();

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.02;
  cube.rotation.y += 0.03;

  if (textMesh1) {
    // wait for textMesh1 to be created asynchronously
    textMesh1.rotation.z += 0.002;
    textMesh1.rotation.x += 0.002;
  }

  renderer.render(scene, camera);
  controls.update();
}
animate();
