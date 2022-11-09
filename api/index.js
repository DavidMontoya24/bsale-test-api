const { app } = require("../src/server.js");

const main = () => {
  const port = app.get("port");
  app.listen(port);
  console.log(`Server listening on port ${port}`);
};

main();
