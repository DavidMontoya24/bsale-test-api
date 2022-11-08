// Get the model for category
const { Category } = require("../models");

const category = new Category();

// Controller that get all the categories
const getCategories = async (req, res) => {
  category
    .getAll()
    .then((data) => {
      const response = Object.values(JSON.parse(JSON.stringify(data)));
      res.status(200).send(response);
    })
    .catch((error) => res.status(400).send(error.message));
};

// Controller that get all the products in given category
const getCategoryById = async (req, res) => {
  const { id } = req.params;
  category
    .getById(id)
    .then((data) => {
      const response = Object.values(JSON.parse(JSON.stringify(data)));
      res.status(200).send(response);
    })
    .catch((error) => res.status(400).send(error.message));
};

module.exports = {
  getCategories,
  getCategoryById,
};
