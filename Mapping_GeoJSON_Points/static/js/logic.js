// Create the map object with a center (San Francisco) and a zoom level (options)
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"14",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
    "geometry":{
        "type":"Point",
        "coordinates":[-122.375,37.61899948120117]}}
]};

// grabbing our GeoJSON data
L.geoJSON(sanFranAirport, {
    //We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
        console.log(feature);
        console.log(latlng);
        return L.marker(latlng)
        .bindPopup("<h2>"+feature.properties.city+"<h2>");
    }
}).addTo(map);

/* L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(feature);
        console.log(layer);
    }
}).addTo(map); */

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
});

// Then we add our 'streets' tile layer to the map.
streets.addTo(map);
