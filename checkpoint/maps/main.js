var map;
var position;
var button = document.querySelector('#mark');
var address = document.querySelector('address');

function initializeMap() {
  var latitude;
  var longitude;
  navigator.geolocation.getCurrentPosition(position => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    window.position = { lat: latitude, lng: longitude };
    map = new google.maps.Map(document.getElementById('map'), {
      center: window.position,
      zoom: 12,
    });
  });
}

button.addEventListener('click', () => {
  var marker = new google.maps.Marker({ position: position, map: map });
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ location: position }, function (results, status) {
    if (status == 'OK') {
      var formattedAddress = results[0].formatted_address;
      address.textContent = formattedAddress;
      for (var component of results[0].address_components) {
        if (component.types.includes('country')) {
          console.log(component.long_name);
          break;
        }
      }
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
  map.setZoom(18);
});
