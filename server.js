const express = require("express");
const app = express();
const PORT = process.env.PORT || 7520;

// Sets up the Express app to handle data parsing (middleware)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve all the static files in the public folder
app.use(express.static("public"));
//Require routes
require("./routes/burger_controller.js")(app);
//Server listens
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

