$(document).ready(function() {
  console.log("hello world");

  $(".enterUserForm").on("submit", function(event) {
    console.log("hello");

    // // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUser = {
      user: $("#fullName")
        .val()
        .trim()
    };

    console.log(newUser);

    // Send the POST request.
    $.ajax("/api/users", {
      type: "POST",
      data: newUser
    }).then(function() {
      console.log("created new user");

      location = "http://wwww.mozilla.org";

      // $.get("/api/statues", function(data) {
      //   console.log("Statues", data);
      //   statues = data;
      //   if (!statues || !statues.length) {
      //     displayEmpty();
      //   }
      //   else {

      //     // initializeRows();
      //   }
    });
  });
});
