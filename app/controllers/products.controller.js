const { Product } = require("../models");

const getProducts = async (req, res) => {
  Product()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => console.log(error));
};

const getProductsQuery = async (req, res) => {
  const { query } = req.params;
  Product(query)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => console.log(error));
};

module.exports = {
  getProducts,
  getProductsQuery,
};
