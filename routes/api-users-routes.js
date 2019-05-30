var db = require("../models");

// POST route for saving a new user
module.exports = function(app) {
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.user
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/uploads", function(req, res) {
    var photo = req.body;

    //console.log(photo)

    Object.keys(photo).forEach(key => {
      //console.log('key123', key);
      var photoText = key;
      console.log(photoText);
      db.Upload.create({
        picture: photoText
      }).then(function(dbPost) {
        res.json(dbPost);
      });
    });
  });
};
