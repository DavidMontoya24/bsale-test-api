const { getCategories, getCategoryById } = require("./categories.controller");
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
