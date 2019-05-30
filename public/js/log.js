$(document).ready(function() {
  console.log("hello world");

  getPhoto();

  function getPhoto() {
    $.get("/api/uploads", function(data) {
      console.log(data);
    //   var rowsToAdd = [];
    //   for (var i = 0; i < data.length; i++) {
    //     rowsToAdd.push(createStatueRow(data[i]));
    //   }
    //   renderStatuesList(rowsToAdd);
    //   nameInput.val("");
    });
  }
});
