$(document).ready(function() {
  console.log("Hello World");

  var imgSrc;
  var image;

  ajaxCall();

  function ajaxCall() {
    //     // var listItemData = $(this)
    //     //   .parent("td")
    //     //   .parent("tr")
    //     //   .data("author");
    var id = window.location.pathname;
    var number = [];

    for (var i = 8; i < id.length; i++) {
      number += id[i];
    }

    console.log(number);
    $.ajax({
      method: "GET",
      url: "/api/statues/" + number
    }).then(function(dbPost) {
      console.log(dbPost);
      var map, infoWindow;
      var statueName = dbPost.ASSET_NAME;
      console.log(statueName);
      $("#statueName").text(statueName);
      var marker = {
        lat: parseFloat(dbPost.LATITUDE),
        lng: parseFloat(dbPost.LONGITUDE)
      };
      console.log(marker);
      // The statue lat and lng would go into the marker variable
      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: marker,
          zoom: 15,
          distance: 100 + "km"
        });
        // radius is in meters
        var circle = new google.maps.Circle({
          map: map,
          radius: 100,
          fillColor: "#ff0000"
        });
        var pinPoint = new google.maps.Marker({ position: marker, map: map });
        circle.bindTo("center", pinPoint, "position");
        infoWindow = new google.maps.InfoWindow();
        compareLocation();
      }

      function compareLocation() {
        // Try HTML5 geolocation.
        $("button").click(function() {
          event.preventDefault();
          imgSrc = $(".taken").attr("src");
          console.log(imgSrc);
          image = new Image();
          console.log(image);
          image.src = imgSrc;
          // $("body").append(image);
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              function(position) {
                pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent("Location found.");
                infoWindow.open(map);
                map.setCenter(pos);
                console.log(pos);
                console.log(marker);
                // results are return in meters
                var distance = google.maps.geometry.spherical.computeDistanceBetween(
                  new google.maps.LatLng(marker.lat, marker.lng),
                  new google.maps.LatLng(pos.lat, pos.lng)
                );
                console.log(distance);
                if (distance <= 100) {
                  alert("You Win");
                  submitPost(imgSrc);
                } else {
                  alert("try again");
                  submitPost(imgSrc);
                  console.log(imgSrc.length);
                }
              },
              function() {
                handleLocationError(true, infoWindow, map.getCenter());
              }
            );
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        });
      }
      initMap();

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
      }
    });
  }

  //submitPost(imgSrc);

  //console.log(imgSrc);

  function submitPost(Upload) {
    $.post("/api/uploads/", Upload, function() {
      window.location.href = "/log";
    });
  }

  // post data to Log

  $.post("/api/log", statueLog, function(data) {
    // pulls result to display img and statue name
    $("#statueName").text(data.name);
    $("#camera--output").attr("src", data.photo);

    // display modal with image & statue name
    $("#imageModal").modal("");
  });
});
