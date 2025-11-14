import * as THREE from "three";
import { particle } from "./scene";

export function init() {
  const geometry = new THREE.TetrahedronGeometry(0.7, 1);

  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading,
    transparent: true,
    opacity: 0.4,
    side: THREE.BackSide
  });

  for (let i = 0; i < 1500; i++) {
    let particlePoint = new THREE.Mesh(geometry, material);
    particlePoint.position
      .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
      .normalize();
    particlePoint.position.multiplyScalar(90 + Math.random() * 700);
    particlePoint.rotation.set(
      Math.random() * 0.5,
      Math.random() * 0.5,
      Math.random() * 0.5
    );
    particle.add(particlePoint);
  }
}
