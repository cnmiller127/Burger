// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
const Burgers = require("../models/burger");


// Routes
// =============================================================
module.exports = function(app) {
    //Create db
  // Get all burgers
  app.get("/api/burgers", function(req, res) {
    Burgers.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/burger", function(req, res) {
    Burgers.create({
      name: req.body.name,
      devoured: req.body.devoured
    }).then(function(results) {
      console.log("post controll", results);
      res.end();
    }).catch(err => console.log(err));
  });

  app.put("/api/burgers/:id", function(req, res) {
    console.log("Burger ID:");
    console.log(req.params.id);
    Burgers.update({
      devoured: true},
      {where: { id: req.params.id}
    }).then(function() {
      res.end();
    });
  });


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/main.html"));
  });
}
