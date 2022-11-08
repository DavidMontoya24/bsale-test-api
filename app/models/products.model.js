const { getConnection } = require("../db");

// Set the Product Model to call the connection
class Product {
  constructor() {}

  // GET all the products
  async getAll() {
    const connection = await getConnection();
    return await connection.query("SELECT * FROM product");
  }

  // GET all the products by a search query
  async getByQuery(query) {
    const connection = await getConnection();
    return await connection.query(
      `SELECT * FROM product WHERE LOWER(name) LIKE LOWER('%${query}%');`
    );
  }
}

module.exports = {
  Product,
};
