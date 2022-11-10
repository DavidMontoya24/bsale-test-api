// Get the model for category by Destructuring the Category object from the models.js file.
const { Category } = require("../models");

// Creating a new instance of the Category class.
const category = new Category();

// Exporting controller that get all the categories
// Gets all the categories from the database and sends them to the client
exports.getCategories = async (req, res) => {
  category
    .findAll()
    .then((data) => {
      /* Converting the data from the database into a JSON object and Sending the response to the client. */
      const response = Object.values(JSON.parse(JSON.stringify(data)));
      res.status(200).send(response);
    })
    .catch((error) => res.status(400).send(error.message));
};

// Exporting controller that get all the products in given category
// Gets a category by its id
exports.getCategoryById = async (req, res) => {
  // Destructuring the id
  const { id } = req.params;
  category
    .findById(id)
    .then((data) => {
      /* Converting the data from the database into a JSON object and Sending the response to the client. */
      const response = Object.values(JSON.parse(JSON.stringify(data)));
      res.status(200).send(response);
    })
    .catch((error) => res.status(400).send(error.message));
};
