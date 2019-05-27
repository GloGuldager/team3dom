$(document).ready(function() {
  console.log("hello world");
  // Getting references to the name input and author container, as well as the table body
  var nameInput = $("#statue-name");
  var statuesList = $("tbody");
  var statueContainer = $(".statue-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  //   $(document).on("submit", "#author-form", handleAuthorFormSubmit);
  //   $(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the initial list of Authors
  getStatues();

  // A function to handle what happens when the form is submitted to create a new Author
  //   function handleAuthorFormSubmit(event) {
  //     event.preventDefault();
  //     // Don't do anything if the name fields hasn't been filled out
  //     if (
  //       !nameInput
  //         .val()
  //         .trim()
  //         .trim()
  //     ) {
  //       return;
  //     }
  //     // Calling the upsertAuthor function and passing in the value of the name input
  //     upsertAuthor({
  //       name: nameInput.val().trim()
  //     });
  //   }

  // A function for creating an author. Calls getAuthors upon completion
  //   function upsertAuthor(authorData) {
  //     $.post("/api/authors", authorData).then(getAuthors);
  //   }

  // Function for creating a new list row for authors
  function createStatueRow(statueData) {
    //console.log(statueData);
    var newTr = $("<tr>");
    newTr.data("statue", statueData);
    newTr.append("<td>" + statueData.ASSET_NAME + "</td>");
    newTr.append("<td>" + statueData.ASSET_ADDR + "</td>");
    newTr.append("<td>" + statueData.SITE_NAME + "</td>");
    newTr.append("<td>" + statueData.LATITUDE + "</td>");
    newTr.append("<td>" + statueData.LONGITUDE + "</td>");

    newTr.append(
      "<td><a href='/upload/" +
        statueData.id +
        "' style='cursor:pointer;color:blue' class='select select-statue'>Select</a></td>"
    );
    console.log(newTr);
    return newTr;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getStatues() {
    $.get("/api/statues", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createStatueRow(data[i]));
      }
      renderStatuesList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderStatuesList(rows) {
    statuesList
      .children()
      .not(":last")
      .remove();
    statueContainer.children(".alert").remove();
    if (rows.length) {
      //console.log(rows);
      statuesList.prepend(rows);
    } else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  //   function renderEmpty() {
  //     var alertDiv = $("<div>");
  //     alertDiv.addClass("alert alert-danger");
  //     alertDiv.text("You must create an Author before you can create a Post.");
  //     authorContainer.append(alertDiv);
  //   }

  // Function for handling what happens when the delete button is pressed
  //   function handleDeleteButtonPress() {
  //     var listItemData = $(this)
  //       .parent("td")
  //       .parent("tr")
  //       .data("author");
  //     var id = listItemData.id;
  //     $.ajax({
  //       method: "DELETE",
  //       url: "/api/authors/" + id
  //     }).then(getAuthors);
  //   }
});
