console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('map').setView([34.0522, -118.2437], 14);
console.log("working")

//  Add a marker to the map for Los Angeles, California.
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "ffffal"
 }).addTo(map);
console.log("working")


// We create the tile layer that will be the background of our map.
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);
console.log("working")

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
console.log("working")
