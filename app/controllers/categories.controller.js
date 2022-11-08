// Get the model for category
const { Category } = require("../models");

const getCategories = async (req, res) => {
  Category()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => console.log(error));
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  Category(id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => console.log(error));
};

module.exports = {
  getCategories,
  getCategoryById,
};
