// public token from mapbox
const MAP_API_TOKEN =
  'pk.eyJ1Ijoia3VydGpvaG4iLCJhIjoiY2w1ajV0azB6MDgwbDNkcXB4d204czJ0ZyJ9.ixlp543beQr3tkuwpzVqtQ'

// var map = new mapboxgl.Map({
//   accessToken: MAP_API_TOKEN,
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11',
//   center: [-74.5, 40],
//   zoom: 9,
// })

// Use geoLocation API to zoom in on the map to wherever you are located

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
})

mapboxgl.accessToken = MAP_API_TOKEN
// const map = new mapboxgl.Map({
//   container: 'map', // container ID
//   style: 'mapbox://styles/mapbox/streets-v11', // style URL
//   center: centerPostion, // starting position
//   zoom: 9, // starting zoom
// })

// Add zoom and rotation controls to the map.

// function setupMap(centerPostion) {
// const map = new mapboxgl.Map({
//   container: 'map', // container ID
//   style: 'mapbox://styles/mapbox/streets-v11', // style URL
//   center: centerPostion, // starting position
//   zoom: 9, // starting zoom
// })
// }

// default location was set up in chrome dev tools using the 'sensors' tool
// function successLocation(position) {
//   setupMap([position.coords.longitude, position.coords.latitude])
//   console.log(position)
// }

// function errorLocation() {
//   console.log('errorLocation')
// }

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
})

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAP_API_TOKEN,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: centerPosition,
    zoom: 15,
  })

  const navigationControls = new mapboxgl.NavigationControl()
  map.addControl(navigationControls)

  const directionControls = new MapboxDirections({
    accessToken: MAP_API_TOKEN,
  })
  map.addControl(directionControls, 'top-left')
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}
