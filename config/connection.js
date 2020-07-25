// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependenciesa
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("ylomb0mvkiz5iz2s", "tw8g6mwdyi98u9vt", "xesapi94813zgnf3", {
  host: "i2cpbxbi4neiupid.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
