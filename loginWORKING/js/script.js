function showDogModal() {
    alert("hi")
    }
    
    
    function initMap() {
    
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 35.7596, lng: -79.0193}  // NC
    
        });
    
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer({
          draggable: true,
          map: map,
        });
    
        displayRoute("Charlotte,NC","Concord,NC", directionsService,
        directionsDisplay);
    
        displayRoute(document.getElementById("start").value, document.getElementById("end").value, directionsService,
            directionsDisplay);
      }
    
      function displayRoute(origin, destination, service, display) {
        service.route({
          origin: origin,
          destination: destination,
          waypoints: [],
          travelMode: 'DRIVING',
          avoidTolls: true
        }, function(response, status) {
          if (status === 'OK') {
            display.setDirections(response);
          } else {
            console.log('Does not work due to ' + status);
          }
        });
      }