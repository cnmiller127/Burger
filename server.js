const sql = require("mysql");
const express = require("express");
const escape = require("escape-html");
//const views = require("./views");

const app = express();

const PORT = process.env.PORT || 7520;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve all the static files in the public folder
app.use(express.static("public"));

const connection = sql.createConnection({
    host: "localhost",
    port: "3036",
    user: "root",
    password: "superBase93!",
    dataBase: ""
})
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });




app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

