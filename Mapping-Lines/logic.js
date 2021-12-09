console.log("working");

// Create the map object with a center and zoom level.
// Create the map object with center at the San Francisco airport.
let map = L.map('map').setView([43.6213, -105.3790], 10);

// Coordinates for each point to be used in the polyline.
let line = [
    [37.615223, -122.389977],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [36.1263, -86.6774],
    [40.6413, -73.7781]
  ];
// Create a polyline using the line coordinates and make the line red.
// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "blue",
    opacity: 0.5,
    weight: 4,
    dashArray: [1,3,5,7,9]
 }).addTo(map);
//  Add a marker to the map for Los Angeles, California.
// An array containing each city's location, state, and population.
let cityData = cities;
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
 console.log(city)
 L.circleMarker(city.location, {
    radius: ((city.population - 200000)/100000),
    weight: 4,
    color: "orange"
})
 .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
 .addTo(map);
});


// We create the tile layer that will be the background of our map.
streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 5,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);
console.log("working")

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
console.log("working")
