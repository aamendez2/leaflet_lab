/*
var map = L.map('map').setView([51.505, -0.09], 13);

//makes a layer that corresponds to the url given
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery   <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'aamendez2.p668ap8k',
    accessToken: 'pk.eyJ1IjoiYWFtZW5kZXoyIiwiYSI6ImNpZ2I5NjVzaDBlaW93ZG03cWt0OW5sMzgifQ.th4dPR3RKIF9DZYCHu-qxA'
}).addTo(map);

//creates a marker element
var marker = L.marker([51.5, -0.09]).addTo(map);

//creates a circle element
var circle = L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
	//adds a circle element to the map
}).addTo(map);

//creates a polygonal shape
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
	//adds a polygon element to the map
]).addTo(map);

//binds popups to the repective elements created
marker.bindPopup("<b>Heyo</b><br>I am a popup I guess.").openPopup();
circle.bindPopup("I'm a circle.");
polygon.bindPopup("I'm a polygon.");

//creates popups that are not bound to any specific element
var popup = L.popup()
	//sets the lat and long
    .setLatLng([51.5, -0.09])
	//displays whatever string is given for the popup
    .setContent("I am a standalone popup, oh no.")
	//adds a popup onto the map and closes whatever popup was displayed before - good for not having multiple popups open at once
    .openOn(map);

var popup = L.popup();


//a function that reports the lat and long with a popup on page click
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
*/
///////geoJSON with Leaflet w/ MegaCities.geojson data ///////

//function to instantiate the Leaflet map
function createMap(){
    //create the map
    var map = L.map('map', {
        center: [20, 0],
        zoom: 2
    });

    //add the baselayer with Open Street Map (slightly easier than with MapBox)
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    //call getData function
    getData(map);
};

//function to retrieve the data and place it on the map
function onEachFeature(feature, layer) {
    //no property named popupContent; instead, create html string with all properties
    var popupContent = "";
    if (feature.properties) {
        //loop to add feature property names and values to html string
        for (var property in feature.properties){
            popupContent += "<p>" + property + ": " + feature.properties[property] + "</p>";
        }
        layer.bindPopup(popupContent);
    };
};
/*
function getData(map){
    //load the data
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: function(response){
			//create some marker options
				var geojsonMarkerOptions = {
								radius: 8,
								fillColor: "#ff7800",
								color: "#000",
								weight: 1,
								opacity: 1,
								fillOpacity: 0.8
							};

				//create a Leaflet GeoJSON layer and add it to the map
				L.geoJson(response, {
					pointToLayer: function (feature, latlng)
					{
						return L.circleMarker(latlng, geojsonMarkerOptions);
					}
				}).addTo(map);
        }
    });
};


$(document).ready(createMap);
*/