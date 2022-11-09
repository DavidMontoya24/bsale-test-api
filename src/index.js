// const { app } = require("./server");

// Set the initial modules

// Set the express app module
const express = require("express");
const app = express();

// Set the morgan and cors modules
const morgan = require("morgan");
app.use(morgan("dev"));
const cors = require("cors");
app.use(cors());

// Set the router module
const router = require("./routes/app.routes");
app.use(router);

// Setting de port of the app server
let port = process.env.PORT || 8000;
app.set("port", port);

// Setting Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = {
  app,
};

/** It starts the server listening on the port specified in the app's configuration ***/
const main = () => {
  const port = app.get("port");
  app.listen(port);
  console.log(`Server listening on port ${port}`);
};

main();
