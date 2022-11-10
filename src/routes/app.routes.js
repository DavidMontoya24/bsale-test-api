// Get and set the Router
const { Router } = require("express");
const router = Router();

// Importing all the request functions from our controller configuration file
const {
  getProducts,
  getProductById,
  getProductsQuery,
  getCategories,
  getCategoryById,
} = require("../controllers");

// Set the routes and endpoints
// The function below will be called when the application is running by default
router.get("/", (req, res) => res.json({ message: "Bsale Test Api" }));
router.get("/products", getProducts);
router.get("/products/search", getProductsQuery);
router.get("/products/:id", getProductById);
router.get("/categories", getCategories);
router.get("/categories/:id/products", getCategoryById);

module.exports = router;
