$(document).ready(function() {
  /* global moment */

  // blogContainer holds all of our posts
  var statueContainer = $(".statue-container");
  // Click events for the edit and delete buttons
  // $(document).on("click", "button.delete", handlePostDelete);
  // $(document).on("click", "button.edit", handlePostEdit);
  // Variable to hold our posts
  var statues;

  // InitializeRows handles appending all of our constructed post HTML inside blogContainer
  function initializeRows() {
    statueContainer.empty();
    var statuesToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      statuesToAdd.push(createNewRow(statues[i]));
    }
    statueContainer.append(statuesToAdd);
  }

  initializeRows();

  // This function constructs a post's HTML
  function createNewRow(statue) {
    // var formattedDate = new Date(post.createdAt);
    // formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var newStatueTable = $("<div>");
    newStatueTable.addClass("table table-striped");
    var newStatueTableHeading = $("<div>");
    newStatueTableHeading.addClass("thead-dark");
    newStatueTableHeadingRow = $("<div>");
    // var deleteBtn = $("<button>");
    // deleteBtn.text("x");
    // deleteBtn.addClass("delete btn btn-danger");
    // var editBtn = $("<button>");
    // editBtn.text("EDIT");
    // editBtn.addClass("edit btn btn-info");
    // var newPostTitle = $("<h2>");
    // var newPostDate = $("<small>");
    // var newPostAuthor = $("<h5>");
    // newPostAuthor.text("Written by: " + post.Author.name);
    // newPostAuthor.css({
    //   float: "right",
    //   color: "blue",
    //   "margin-top": "-10px"
    // });
    var newStatueTableBody = $("<div>");
    newStatueTableBody.addClass("card-body");

    for (var i = 0; i < statueContainer.length; i++) {
      var newStatueBody = $("<p>");
      newStatueTitle.text(statues.ASSET_NAME + " ");
    }

    
    newPostBody.text(statue.body);
    newPostDate.text(formattedDate);
    newPostTitle.append(newPostDate);
    newPostCardHeading.append(deleteBtn);
    newPostCardHeading.append(editBtn);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostAuthor);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    return newPostCard;
  }
});
