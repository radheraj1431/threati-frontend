import { store } from "../redux/store";
import toastActions from "../redux/toasts/toastActions";
import authActions from "../redux/auth/authActions";

export const createToast = (title, type, token) =>
  new Promise(() => {
    store.dispatch(toastActions.createNotification(title, type, token));
  });
export const checkSession = () =>
  new Promise(() => {
    store.dispatch(authActions.isSession());
  });
export const apiEndPoint = "";
export const erromessage = "You are not logged in";
export const fieldList = [
  { value: "ioc.keyword", name: "IOC" },
  { value: "iocType.keyword", name: "IOCType" },
  { value: "severity", name: "severity" },
  { value: "threatName.keyword", name: "ThreatName" },
  { value: "geoLocation.city.keyword", name: "GeoLocation-City" },
  { value: "geoLocation.countryCode.keyword", name: "GeoLocation-CountryCode " },
  { value: "cyberKillChainStage.keyword", name: "CyberKillChainStage" },
  { value: "typeDetails.Threat.keyword", name: "Ransomware Threat" },
  { value: "typeDetails.Malware.keyword", name: "Ransomware Malware" },
  { value: "createdTime", name: "CreatedTime" },
  { value: "tags.keyword", name: "Tags" },
  { value: "updateTime", name: "UpdateTime" }
];
export const airgapField = [
  { value: "ioc", name: "IOC" },
  { value: "iocType", name: "IOCType" },
  { value: "severity", name: "severity" },
  { value: "threatName", name: "ThreatName" },
  { value: "geoLocation.city", name: "GeoLocation-City" },
  { value: "geoLocation.countryCode", name: "GeoLocation-CountryCode " },
  { value: "cyberKillChainStage", name: "CyberKillChainStage" },
  { value: "typeDetails.Threat", name: "Ransomware Threat" },
  { value: "typeDetails.Malware", name: "Ransomware Malware" },
  { value: "createdTime", name: "CreatedTime" },
  { value: "tags", name: "Tags" },
  { value: "updateTime", name: "UpdateTime" }
];
export const infection = [
  { value: "threat_type.keyword", name: "Threat Type" },
  { value: "threat_name.keyword", name: "Threat Name" },
  { value: "event_name.keyword", name: "Event Name" },
  { value: "ioc.keyword", name: "IOC" },
  { value: "score.keyword", name: "Score" },
  { value: "device.keyword", name: "Device" },
  { value: "infection_type.keyword", name: "Infection Type" },
  { value: "dest.keyword", name: "Destination" },
  { value: "src.keyword", name: "Source" },
  { value: "origin.keyword", name: "Origin", type: "StrInt" },
  { value: "count", name: "Count", type: "Integer" },
  { value: "label.keyword", name: "Label" },
  { value: "ioc_type.keyword", name: "IOC Type" },
  { value: "logtype.keyword", name: "Log Type" },
  { value: "createdTime", name: "Created Time" },
  { value: "updateTime", name: "Update Time" },
  { value: "srcCountry.keyword", name: "SourceGeoCountry" },
  { value: "srcCode.keyword", name: "SourceGeoCountryCode" },
  // { value: "srcGeo.srcLat.keyword", name: "SourceGeo-Latitude" },
  // { value: "ssrcGeo.srcLong.keyword", name: "SourceGeo-Longitude" },
  { value: "destCountry.keyword", name: "DestinationGeoCountry" },
  { value: "destCode.keyword", name: "DestinationGeoCountryCode" },
  // { value: "dstGeo.dstLat.keyword", name: "DestinationGeo-Latitude" },
  // { value: "dstGeo.dstLong.keyword", name: "DestinationGeo-Longitude" },
  { value: "communication_type.keyword", name: "CommunicationType" },
  { value: "geoLocation.city.keyword", name: "GeoLocation-City" },
  { value: "geoLocation.countryCode.keyword", name: "GeoLocation-CountryCode" },
  // { value: "geoLocation.longitude", name: "GeoLocation-Longitude" },
  // { value: "geoLocation.latitude", name: "GeoLocation-Latitude" }
];


