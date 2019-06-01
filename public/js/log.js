$(document).ready(function() {
  console.log("hello world");
  // var image;

  getPhoto();

  function getPhoto() {
    $.get("/api/uploads", function(data) {
      console.log(data);
      var rowsPhotos = [];
      //imageSrc = data[i].picture;
      for (var i = 0; i < data.length; i++) {
        var image = new Image();

        console.log(data[i].picture);
        var split = data[i].picture.replace(/\s/g, "+");
        console.log(split);
        image.src = split;

        $("#he").append(image);
      }
      // console.log(data[0].picture);
      // var split = data[0].picture.replace(/\s/g, "+");
      // console.log(split);
      // image.src = split;

      // $("#he").append(image);

      console.log(rowsPhotos);
      //   renderStatuesList(rowsToAdd);
      //   nameInput.val("");
    });
  }
});
