import * as THREE from "three";
import { GLOBE_RADIUS } from "./constants";
import { globe } from "./scene";
export const Shaders = {
  earth: {
    uniforms: {
      texture: { type: "t", value: null },
      s: { type: "f", value: -1.0 },
      b: { type: "f", value: 1.0 },
      p: { type: "f", value: 4.5 }
    },
    vertexShader: [
      "varying vec3 vNormal;",
      "varying vec2 vUv;",
      "void main() {",
      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
      "vNormal = normalize( normalMatrix * normal );",
      "vUv = uv;",
      "}"
    ].join("\n"),
    fragmentShader: [
      "uniform sampler2D texture;",
      "varying vec3 vNormal;",
      "varying vec2 vUv;",
      "void main() {",
      "vec3 diffuse = texture2D( texture, vUv ).xyz;",
      "float intensity = 1.05 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) );",
      "vec3 atmosphere = vec3( 1,2,3 ) * pow( intensity, 4.5 );",
      "gl_FragColor = vec4( diffuse + atmosphere, 1.0 );",
      "}"
    ].join("\n")
  },
  atmosphere: {
    uniforms: {},
    vertexShader: [
      "varying vec3 vNormal;",
      "void main() {",
      "vNormal = normalize( normalMatrix * normal );",
      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
      "}"
    ].join("\n"),
    fragmentShader: [
      "varying vec3 vNormal;",
      "void main() {",
      "float intensity = pow( 0.8 - dot( vNormal, vec3( 0, 0, 1.0 ) ), 12.0 );",
      "gl_FragColor = vec4( 2.0, 1.0, 1.0, 1.0 ) * intensity;",
      "}"
    ].join("\n")
  }
};
export function init() {
  let geometry = new THREE.SphereGeometry(GLOBE_RADIUS, 40, 32);
  let loader = new THREE.TextureLoader();
  loader.setCrossOrigin(true);

  let Texture=loader.load(require("./imgs/map.png"));
  Texture.magFilter=THREE.LinearFilter;

  var shader, material, uniforms, mesh;
  material = new THREE.MeshPhongMaterial({
    side: THREE.FrontSide,
    bumpMap:Texture,
    map:Texture,
    bumpScale: 8,
    transparent:true,
  });
  let sphere = new THREE.Mesh(geometry, material);
  sphere.receiveShadow = true;
  globe.add(sphere);

  shader = Shaders["earth"];
  uniforms = THREE.UniformsUtils.clone(shader.uniforms);
  material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: shader.vertexShader,
    fragmentShader: shader.fragmentShader,
    side: THREE.FrontSide,
    blending: THREE.AdditiveBlending,
    transparent: true
  });
  
  mesh = new THREE.Mesh(geometry, material);
  mesh.scale.set(1.01, 1.01, 1.01);
  globe.add(mesh);

}
