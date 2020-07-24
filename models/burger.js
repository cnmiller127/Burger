// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Burgers = sequelize.define("burgers", {
  name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN,
});

// Syncs with DB
Burgers.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Burgers;

