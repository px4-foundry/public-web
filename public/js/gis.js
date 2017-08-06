
$(document).ready(  function() {
	// Provide your access token
	console.log('here');
	L.mapbox.accessToken = 'pk.eyJ1IjoiY29ubmVjdGVkZWFzIiwiYSI6IjJlMzZkODliMDEzMWRhZjViMzI2MmVmZTdmMzZhOGUwIn0.bOxeQsDNCpz5q_rOsZAqCg';
	// Create a map in the div #map
	var map = L.mapbox.map('map', 'connectedeas.4011cd67');//.setView([40, -74.50], 9);
})