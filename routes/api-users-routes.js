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
};
