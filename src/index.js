const { app } = require("./server");

/** It starts the server listening on the port specified in the app's configuration ***/
const main = () => {
  const port = app.get("port");
  app.listen(port);
  console.log(`Server listening on port ${port}`);
};

main();
