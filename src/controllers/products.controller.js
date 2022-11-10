const { Product } = require("../models");

const product = new Product();

// Controller that get all the products
exports.getProducts = (req, res) => {
  product
    .getAll()
    .then((data) => {
      const response = Object.values(JSON.parse(JSON.stringify(data)));
      res.status(200).send(response);
    })
    .catch((error) => res.status(400).send(error.message));
};

// Controller that show product by ID
exports.getProductById = (req, res) => {
  const { id } = req.params;
  product
    .getById(id)
    .then((data) => {
      const response = Object.values(JSON.parse(JSON.stringify(data)));
      res.status(200).send(response);
    })
    .catch((error) => res.status(400).send(error.message));
};

// Controller that get all the products by a given search query
exports.getProductsQuery = (req, res) => {
  const { query } = req.params;
  product
    .getByQuery(query)
    .then((data) => {
      const response = Object.values(JSON.parse(JSON.stringify(data)));
      res.status(200).send(response);
    })
    .catch((error) => res.status(400).send(error.message));
};
