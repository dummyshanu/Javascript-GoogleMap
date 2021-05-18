const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoic2hhbnV4ZCIsImEiOiJja29zY3VrN3gwMGFuMndycnl2cTNhbjNmIn0.SBtgjDHhOkhhoHHrPhUEDg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setUpMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  console.log("Error");
}

function setUpMap(centerPostion) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    accessToken: MAPBOX_ACCESS_TOKEN,
    center: centerPostion,
    zoom: 15,
  });

  const navigationControls = new mapboxgl.NavigationControl()
  const navigationDirections = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,

  })
  map.addControl(navigationControls)
  map.addControl(navigationDirections, "top-left")
}
