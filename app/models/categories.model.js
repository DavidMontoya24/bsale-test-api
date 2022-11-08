const { getConnection } = require("../db");

class Category {
  constructor() {}

  // GET all the categories
  async getAll() {
    const connection = await getConnection();
    return await connection.query("SELECT * FROM category");
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
