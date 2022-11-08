// Get and set the Router
const { Router } = require("express");
const router = Router();

// Get all the controllers request functions
const {
  getProducts,
  getProductsQuery,
  getCategories,
  getCategoryById,
} = require("../controllers");

// Set the routes and endpoints
router.get("/products", getProducts);
router.get("/products/:query", getProductsQuery);
router.get("/categories", getCategories);
router.get("/categories/:id/products", getCategoryById);

module.exports = router;
