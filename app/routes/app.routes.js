// Get and set the Router
const { Router } = require("express");
const router = Router();

// Get
const {
  getProducts,
  getProductsQuery,
  getCategories,
  getCategoryById,
} = require("../controllers");

router.get("/products", getProducts);
router.get("/products/:query", getProductsQuery);
router.get("/categories", getCategories);
router.get("/categories/:id/products", getCategoryById);

module.exports = router;
