// var map, infoWindow;
// var marker = { lat: 39.941541, lng: -75.199481 };
// // The statue lat and lng would go into the marker variable
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: marker,
//     zoom: 15,
//     distance: 100 + "km"
//   });
//   // radius is in meters
//   var circle = new google.maps.Circle({
//     map: map,
//     radius: 100,
//     fillColor: "#ff0000"
//   });
//   var pinPoint = new google.maps.Marker({ position: marker, map: map });
//   circle.bindTo("center", pinPoint, "position");
//   infoWindow = new google.maps.InfoWindow();
//   compareLocation();
// }

// function compareLocation() {
//   // Try HTML5 geolocation.
//   $("button").click(function() {
//     event.preventDefault();
//     var imgSrc = $(".taken").attr("src");
//     console.log(imgSrc);
//     var image = new Image();
//     image.src = imgSrc;
//     $("body").append(image);
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         function(position) {
//           pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           };
//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);
//           console.log(pos);
//           console.log(marker);
//           // results are return in meters
//           var distance = google.maps.geometry.spherical.computeDistanceBetween(
//             new google.maps.LatLng(marker.lat, marker.lng),
//             new google.maps.LatLng(pos.lat, pos.lng)
//           );
//           console.log(distance);
//           if (distance <= 100) {
//             alert("You Win");
//           } else {
//             alert("try again");
//           }
//         },
//         function() {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   });
// }
// initMap();

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
// }
