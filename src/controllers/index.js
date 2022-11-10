/* Importing the functions from the categories.controller.js file. */
const { getCategories, getCategoryById } = require("./categories.controller");

/* Importing the functions from the products.controller.js file. */
const {
  getProducts,
  getProductById,
  getProductsQuery,
} = require("./products.controller");

module.exports = {
  getProducts,
  getProductById,
  getProductsQuery,
  getCategories,
  getCategoryById,
};
