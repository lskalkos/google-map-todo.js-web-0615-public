$(document).ready(function(){

  function getLocation() {
    // code here

    navigator.geolocation.getCurrentPosition(function(position) {

      $('p#longitude').html(position.coords.longitude);
      $('p#latitude').html(position.coords.latitude);

      insertMap(position.coords.latitude, position.coords.longitude);

    });
  }

  getLocation();

});
