import * as THREE from "three";
import { getSplineFromCoords } from "./utils";
import { spot, newLine } from "./scene";
import { MeshLine, MeshLineMaterial } from "three.meshline";
import { CURVE_SEGMENTS } from "./constants";

export default function Curve(
  coords,
  material,
  SEVI_COLOR,
  srcCountry,
  destCountry
) {
  const { spline } = getSplineFromCoords(coords);

  // add curve geometry
  let curveGeometry = new THREE.BufferGeometry();
  curveGeometry.clearGroups();
  const points = new Float32Array(CURVE_SEGMENTS * 3);
  const vertices = spline.getPoints(CURVE_SEGMENTS - 1);

  let start = vertices[0];
  let end = vertices[vertices.length - 1];

  for (let i = 0, j = 0; i < vertices.length; i++) {
    const vertex = vertices[i];
    points[j++] = vertex.x;
    points[j++] = vertex.y;
    points[j++] = vertex.z;
  }

  // !!!
  // You can use setDrawRange to animate the curve
  curveGeometry.addAttribute("position", new THREE.BufferAttribute(points, 3));
  curveGeometry.vertices = vertices;
  curveGeometry.setDrawRange(0, CURVE_SEGMENTS);
  curveGeometry.clearGroups();

  let geometrydl = new THREE.Geometry().setFromPoints(
    new THREE.CatmullRomCurve3(vertices).getPoints(3)
  );
  geometrydl.vertices = vertices;

  const line = new MeshLine();
  line.setGeometry(geometrydl, p => {
    const a = (0.5 - Math.abs(0.5 - p)) * 5;
    return a;
  });

  const materialdl = new MeshLineMaterial({
    color: new THREE.Color(SEVI_COLOR),
    transparent: true,
    lineWidth: 1.5,
    dashRatio: 0,
    dashArray: 1,
    dashOffset: 0,
    opacity: 1,
    side: THREE.DoubleSide
  });

  let list = document.getElementById("js-list");
  if(list && list !== null){
    const element = document.createElement("li");
    element.innerHTML = `<span class="text">&nbsp;${srcCountry} to ${destCountry}&nbsp;</span>`;
    list.appendChild(element);
    const elementStyle = element.style;
    elementStyle.color = `${SEVI_COLOR}`;
    elementStyle.fontWeight = "600";
    elementStyle.fontFamily = "Orbitron";
    elementStyle.letterSpacing = "1.36px";
    elementStyle.color = `${SEVI_COLOR}`;
    elementStyle.backgroundImage = `linear-gradient(to right, rgba(7,178,245,0.2), rgba(7,178,245,0))`;
    elementStyle.marginBottom = "2.5px";
    elementStyle.listStyleType = "none";
  
    setTimeout(() => {
      element.innerHTML = "";
    }, 10000);
  }

  const curveObject = new THREE.Mesh(line.geometry, materialdl);
  curveObject._path = geometrydl.vertices;
  newLine.add(curveObject);

  /* Spot on country*/
  let geometry = new THREE.SphereGeometry(2, 5, 32);
  material = new THREE.MeshBasicMaterial({
    color: new THREE.Color(SEVI_COLOR),
    side: THREE.DoubleSide
  });
  var mesh1 = new THREE.Mesh(geometry, material);
  var mesh2 = new THREE.Mesh(geometry, material);

  mesh1.position.x = start.x;
  mesh1.position.y = start.y;
  mesh1.position.z = start.z;
  mesh1.rotation.x = 2.5;

  mesh2.position.x = end.x;
  mesh2.position.y = end.y;
  mesh2.position.z = end.z;
  mesh2.rotation.x = 0.4;

  spot.add(mesh1);
  spot.add(mesh2);
  setTimeout(() => {
    spot.remove(mesh1);
    spot.remove(mesh2);
    newLine.remove(curveObject);
  }, 10000);

  curveGeometry = null;
}
