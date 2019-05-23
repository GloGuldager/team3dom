$(document).ready(function() {
  console.log("hello world");

  //$(".btnCreateUser").on("submit", function(event) {
  $(".btnCreateUser").click(function(event) {
    console.log("hello");

    // // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUser = {
      user: $("#user-name")
        .val()
        .trim()
    };

    console.log(newUser);
    console.log($);
    $("#user-name").val("");
    // Send the POST request.
    $.ajax("/api/users", {
      type: "POST",
      data: newUser
    }).then(function() {
      console.log("created new user");

      //location = "http://wwww.mozilla.org";
      // location = "http://localhost:3000/table";
      // location = "https://statuequest.herokuapp.com/table";
      location = "/table";
    });
  });
});
