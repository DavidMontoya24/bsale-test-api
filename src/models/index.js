/* Importing the Category and Product models from the categories.model and products.model files. */
const { Category } = require("./categories.model");
const { Product } = require("./products.model");

module.exports = {
  Product,
  Category,
};
