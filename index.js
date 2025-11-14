import { init as initScene } from './scene';
import { init as initSphere } from './sphere';
// import { init as initRings } from './globeRings';
import { init as initParticles } from './particles';
import $ from "jquery";

export default function initGlobe(container,data) {
  const check = $("#globe-app").children("canvas").length;
  if (check === 0) {
    initScene(container);
    initParticles();
    initSphere();
  }
}
