// Set the initial modules

// Set the app modules, packages and dependencies
const express = require("express");
const cors = require("cors");

// Set the routes comming from our routes configuration file
const router = require("./routes/app.routes");

const app = express();

// Setting de port of the app server
let port = process.env.PORT || 8080;
app.set("port", port);

// Setting our application-level Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Set the router paths
app.use(router);

// Export the app configuration
module.exports = app;
