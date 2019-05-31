$(document).ready(function() {
  console.log("hello world");

  getPhoto();

  function getPhoto() {
    $.get("/api/uploads", function(data) {
      console.log(data);
      //   var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        // rowsToAdd.push(createStatueRow(data[i]));
        var img = $("<img>");
        img.attr("src", data[i].picture);
        $("#selfie-Container").append(img);
      }
      //   renderStatuesList(rowsToAdd);
      //   nameInput.val("");
      // fixing conflicts
    });
  }
});
