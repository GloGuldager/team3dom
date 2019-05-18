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
    db.Statues.findAll({})
      .then(function(dbStatues) {
        res.json(dbStatues);
      });
  });

  // Get route for retrieving a single statue
  app.get("/api/statues/:id", function(req, res) {
    db.Statues.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbStatues) {
        res.json(dbStatues);
      });
  });

  // POST route for saving a new statue
  app.post("/api/statues", function(req, res) {
    console.log(req.body);
    db.Statues.create({
      name: req.body.title,
      address: req.body.body,
      site: req.body.site,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    })
      .then(function(dbStatues) {
        res.json(dbStatues);
      });
  });

  // DELETE route for deleting statues
  app.delete("/api/statues/:id", function(req, res) {
    db.Statues.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbStatues) {
        res.json(dbStatues);
      });
  });

  // PUT route for updating statue
  app.put("/api/statues", function(req, res) {
    db.Statues.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbStatues) {
        res.json(dbStatues);
      });
  });
};
