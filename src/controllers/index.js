const { getCategories, getCategoryById } = require("./categories.controller");
const { getProducts, getProductsQuery } = require("./products.controller");

module.exports = {
  getProducts,
  getProductsQuery,
  getCategories,
  getCategoryById,
};
