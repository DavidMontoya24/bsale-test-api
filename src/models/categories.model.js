const { getConnection } = require("../db");

/* Set the Category Model that contains methods that allow us to get all the categories and get all the products
in a specified category */
class Category {
  constructor() {
    this.table = "category";
  }

  // GET all the categories
  async getAll() {
    const connection = await getConnection();
    return await connection.query(`SELECT * FROM ${this.table}`);
  }

  // GET all the products in specified category
  async getById(id) {
    const connection = await getConnection();
    return await connection.query(
      `SELECT * FROM product WHERE category LIKE ${id};`
    );
  }
}

module.exports = {
  Category,
};
