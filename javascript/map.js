var googleMap = new google.maps.Map($('#google-map')[0]);
var lat = 0;
var lng = 0;
var zoom = 1;


var latError = "*Lattitude values must be between -90 and 90";
var lngError = "*Longitude values must be between -180 and 180";
var zoomError = "*Zoom values must be between 1 and 18";
googleMap.setCenter( {lat: lat, lng: lng} );
googleMap.setZoom(zoom);
 
//marker.addListener( 'click', function( )

var submitButton = document.getElementById("submit");

$(submitButton).on( 'click', runSubmit);

$('#lat-input, #lng-input, #zoom-input').on( 'focus', clearError );

function runSubmit() {
  getInputs();
  if (lat < -90 || lat > 90) {
    errorMessage('#lat-error', latError);
  }
  if (lng < -180 || lng > 180) {
    errorMessage('#lng-error', lngError);
  }
  if (zoom < 1 || zoom > 18) {
    errorMessage('#zoom-error', zoomError);
  }
  else {
    moveMap(lat, lng, zoom);
    
  }
}

function moveMap(lat, lng, zoom) {
  googleMap.setCenter({lat: lat, lng: lng});
  googleMap.setZoom(zoom);
}
function errorMessage(id, msg) {
  $(id).text(msg); 
}

function clearError() {
  $('#lat-error' ).text( '' );
  $('#lng-error' ).text( '' );
  $('#zoom-error' ).text( '' );
}

function getInputs () {
  lat = parseFloat($('#lat-input').val());
  console.log(lat);
  lng = parseFloat($('#lng-input').val());
  console.log(lng);
  zoom = parseFloat($('#zoom-input').val());
  console.log(lng);
}