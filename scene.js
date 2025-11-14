import * as THREE from "three";
import Hammer from "hammerjs";
import { clamp, animateLine } from "./utils";
import { PI_TWO } from "./constants";

let _deltaX = 0;
let _deltaY = 0;
let _startX = 0;
let _startY = 0;
let stopGlobe = false;
let distance = 1200,
  distanceTarget = 1500,
  distanceMin = 1080;

export const scene = new THREE.Scene();
export const rootMesh = new THREE.Mesh(new THREE.Geometry());
export const globe = new THREE.Mesh(new THREE.Geometry());
export const spot = new THREE.Mesh(new THREE.Geometry());
export const particle = new THREE.Object3D();

export const newLine = new THREE.Mesh();
export function init(container) {
  const width = container.offsetWidth || window.innerWidth;
  const height = container.offsetHeight || window.innerHeight;
  const camera = new THREE.PerspectiveCamera(30, width / height, 1, 10000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  // main animation loop
  const play = () => {
    window.history.forward(1);
    //rotation
    rootMesh.rotation.x += Math.atan(_deltaY / distance) * 0.8;
    rootMesh.rotation.y += Math.atan(_deltaX / distance) * 0.8;

    // particle.rotation.x += 0.0066;
    if (stopGlobe === false) {
      particle.rotation.y += 0.003;
      globe.rotation.y += 0.0010;
      spot.rotation.y += 0.0010;
      newLine.rotation.y += 0.0010;
    }

    // if (rootMesh.rotation.x > PI_TWO) rootMesh.rotation.x -= PI_TWO;
    if (rootMesh.rotation.y > PI_TWO) rootMesh.rotation.y -= PI_TWO;

    if (rootMesh.rotation.x > 0.724) {
      rootMesh.rotation.x = 0.724;
    }
    if (rootMesh.rotation.x < -0.421) {
      rootMesh.rotation.x = -0.421;
    }
    // zoom
    camera.position.z = distance;
    newLine.children.forEach(el => {
      animateLine(el);
    });
    // render
    renderer.render(scene, camera);

    // next frame
    requestAnimationFrame(play);
  };

  // init scene
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.autoClear = false;
  renderer.setClearColor(0x05060a, 0.0);
  container.appendChild(renderer.domElement);
  camera.position.z = distance;
  // add rootMesh to scene
  rootMesh.add(particle);
  rootMesh.add(globe);
  rootMesh.add(newLine);
  rootMesh.add(spot);
  scene.add(rootMesh);
  // lighting
  let ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);

  // scene.add(new THREE.HemisphereLight(0xffffff, 0xffffff));
  let spotLight = new THREE.SpotLight(0xffffff, 0.5);
  spotLight.position.set(-0.5, 0.5, 1);
  spotLight.position.multiplyScalar(700);
  //scene.add(spotLight);

  //spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = window.innerWidth;
  spotLight.shadow.mapSize.height = window.innerHeight;
  spotLight.shadow.camera.near = distanceMin;
  spotLight.shadow.camera.far = distanceTarget;
  spotLight.shadow.camera.fov = 40;
  spotLight.shadow.bias = -0.005;

  // init event listeners
  initPanListener(container);
  initZoomListener(container);
  initResizeListener(container, camera, renderer);
  initClick(container);
  // play scene
  play();
}

function reset() {
  _deltaX = 0;
  _deltaY = 0;
  _startX = 0;
  _startY = 0;
}

function initPanListener(container) {
  const mc = new Hammer.Manager(container);

  mc.add(new Hammer.Pan());

  mc.on("pan", e => {
    _deltaX = e.deltaX - _startX;
    _deltaY = e.deltaY - _startY;
  });

  mc.on("panstart", () => {
    reset();
    container.style.cursor = "move";
  });

  mc.on("panend", () => {
    reset();
    container.style.cursor = "auto";
  });
}

function initZoomListener(container) {
  container.addEventListener(
    "mousewheel",
    e => {
      const delta = e.wheelDeltaY * 0.2;
      distance = clamp(distance - delta, distanceMin, distanceTarget);
    },
    false
  );
}

function initResizeListener(container, camera, renderer) {
  window.addEventListener(
    "resize",
    () => {
      const width = container.offsetWidth || window.innerWidth;
      const height = container.offsetHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    },
    false
  );
}
function initClick(globe) {
  globe.addEventListener(
    "click",
    () => {
      stopGlobe = true;
      setTimeout(function() {
        stopGlobe = false;
      }, 5000);
    },
    false
  );
}
window.addEventListener("beforeunload", function(e) {
  rootMesh.children.forEach(d => {
    if (d.children) {
      if (d.children.length > 0) {
        d.position.set(0, 0, 0);
        d.rotation.set(0, 0, 0);
        d.children.forEach(dl => {
          dl.geometry.dispose();
          dl.material.dispose();
        });
      }
    }
  });
});
