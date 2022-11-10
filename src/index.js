const app = require("./server");

/** We starte the initialization of our app which server is listening on the port specified in the app's configuration ***/
const main = () => {
  // We get ourt port from the config
  const port = app.get("port");
  // Start listening on the port specified
  app.listen(port);
  console.log(`Server listening on port ${port}`);
};

// Runnin the initialization
main();
