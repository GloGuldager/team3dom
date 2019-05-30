// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our statue model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the statue
  app.get("/api/statues/", function(req, res) {
    db.Statue.findAll({}).then(function(dbStatues) {
      //console.log(dbStatues);
      res.json(dbStatues);
    });
  });
  
  app.get("/api/uploads/", function(req, res) {
    db.Upload.findAll({}).then(function(dbStatues) {
      //console.log(dbStatues);
      res.json(dbStatues);
    });
  });

  // Get route for retrieving a single statue
  app.get("/api/statues/:id", function(req, res) {
    db.Statue.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbStatues) {
      res.json(dbStatues);
    });
  });

  // POST route for saving a new statue
  app.post("/api/statues", function(req, res) {
    console.log(req.body);
    db.Statue.create({
      name: req.body.title,
      address: req.body.body,
      site: req.body.site,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    }).then(function(dbStatues) {
      res.json(dbStatues);
    });
  });

  // DELETE route for deleting statues
  app.delete("/api/statues/:id", function(req, res) {
    db.Statue.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStatues) {
      res.json(dbStatues);
    });
  });

  // PUT route for updating statue
  app.put("/api/statues", function(req, res) {
    db.Statue.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbStatues) {
      res.json(dbStatues);
    });
  });
};
