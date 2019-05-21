  // POST route for saving a new statue
  module.exports = function(app) {
    app.post("/api/users", function(req, res) {
    console.log(req.body);
    // db.Users.create({
    // name: req.body.title
    // })
    //   .then(function(dbStatues) {
    //     res.json(dbStatues);
    //   });
    res.json("Test Test");
  });
};