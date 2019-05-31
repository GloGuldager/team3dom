$(document).ready(function() {
  console.log("hello world");
  var image;

  getPhoto();

  var imageSrc = [];

  function getPhoto() {
    $.get("/api/uploads", function(data) {
      console.log(data);
      //var rowsPhotos = [];

      //for (var i = 0; i < data.length; i++) {
      // imageSrc += data[i].picture;
      //     //console.log(imageSrc);
      //   }

      //   for (var j = 0; j<imageSrc.length; j++){
      //     //var imageSrc2 = imageSrc[i].slice(22);
      //     console.log("kasdhfkasjdhf=" + imageSrc2)
      //   }

      // var canvas = document.getElementById("c");
      // var ctx = canvas.getContext("2d");

      // var image = new Image();
      // image.onload = function() {
      //   ctx.drawImage(image, 0, 0);
      // };

      //   image = new Image();
      var split = data[1].picture.split(",");

      split = split.filter(function(str) {
        return /\S/.test(str);
    });

    console.log(split)
      //image.src =
      var source = "data:image/png;base64, " + split[1];

      

      $(".image-div").prepend("<img id='theImg' src='" + source + "' />");

      $('.image-div').prepend('<img id="theImg" src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" />')

      //console.log(img);

      //$(".image-div").append(img);

      //$("body").append(image);

      //console.log(rowsPhotos);
      //   renderStatuesList(rowsToAdd);
      //   nameInput.val("");

    });
  }
});
