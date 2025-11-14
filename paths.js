import * as THREE from "three";
// import _ from 'lodash';
import Curve from "./Curve";
import { CURVE_COLOR } from "./constants";

export function init(allCoords, severity, srcCountry, destCountry) {
  let SEVI_COLOR;
  switch (severity) {
    case "0":
      SEVI_COLOR = "#D8E7A5";
      break;
    case "1":
      SEVI_COLOR = "#6FBE44";
      break;
    case "2":
      SEVI_COLOR = "#80C342";
      break;
    case "3":
      SEVI_COLOR = "#9DCB3B";
      break;
    case "4":
      SEVI_COLOR = "#C5D92D";
      break;
    case "5":
      SEVI_COLOR = "#BEC031";
      break;
    case "6":
      SEVI_COLOR = "#FFC709";
      break;
    case "7":
      SEVI_COLOR = "#F78F1E";
      break;
    case "8":
      SEVI_COLOR = "#F15D22";
      break;
    case "9":
      SEVI_COLOR = "#EE3624";
      break;
    case "10":
      SEVI_COLOR = "#ED2024";
      break;
    default:
      break;
  }
  const material = new THREE.MeshBasicMaterial({
    blending: THREE.AdditiveBlending,
    color: CURVE_COLOR,
    visible: true,
    side: THREE.DoubleSide
  });
  allCoords.forEach(coords => {
    Curve(coords, material, SEVI_COLOR, srcCountry, destCountry);
  });
}
