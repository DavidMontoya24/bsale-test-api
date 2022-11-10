// Importing the Product model from the models folder.
const { Product } = require("../models");

// Creating a new instance of the Product model.
const product = new Product();

// Exporting controller that get all the products
// Gets all the products from the database.
exports.getProducts = (req, res) => {
  product
    .getAll()
    .then((data) => {
      /* Converting the data from the database into a JSON object and Sending the response to the client. */
      const response = Object.values(JSON.parse(JSON.stringify(data)));
      res.status(200).send(response);
    })
    .catch((error) => res.status(400).send(error.message));
};

// Controller that get all the products by a given search query
// Gets all the products by a given search query.
exports.getProductsQuery = (req, res) => {
  // Destructuring the query (given word)
  const { query } = req.params;
  product
    .getByQuery(query)
    .then((data) => {
      /* Converting the data from the database into a JSON object and Sending the response to the client. */
      const response = Object.values(JSON.parse(JSON.stringify(data)));
      res.status(200).send(response);
    })
    .catch((error) => res.status(400).send(error.message));
};

// Exporting controller that show product by ID
exports.getProductById = (req, res) => {
  // Destructuring the id
  const { id } = req.params;
  product
    .getById(id)
    .then((data) => {
      /* Converting the data from the database into a JSON object and Sending the response to the client. */
      const response = Object.values(JSON.parse(JSON.stringify(data)));
      res.status(200).send(response);
    })
    .catch((error) => res.status(400).send(error.message));
};
