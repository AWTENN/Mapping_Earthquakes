console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('map').setView([34.0522, -118.2437], 4);
console.log("working")

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
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);
console.log("working")

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
console.log("working")
