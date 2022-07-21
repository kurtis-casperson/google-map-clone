// public token from mapbox
const MAP_API_TOKEN =
  'pk.eyJ1Ijoia3VydGpvaG4iLCJhIjoiY2w1ajV0azB6MDgwbDNkcXB4d204czJ0ZyJ9.ixlp543beQr3tkuwpzVqtQ'

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
