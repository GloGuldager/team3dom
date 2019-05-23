$(document).ready(function() {
  console.log("Hello World");

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
    });
  }
});
