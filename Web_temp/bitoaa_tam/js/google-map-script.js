// JavaScript Document
// google map //

function initialize() {
	var myLatLong = new google.maps.LatLng(23.22431,77.436104);
	var mapOptions = {
  	center: myLatLong,
    zoom: 16,


    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("Map"), mapOptions);
  var marker = new google.maps.Marker({
      position: myLatLong,
      map: map,
	icon: 'images/loc_ico.png',
  });
  
  
  
  
  
  
}
google.maps.event.addDomListener(window, 'load', initialize);