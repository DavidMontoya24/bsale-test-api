const getConnection = require("../db");

/* Set the Product Model that has a method to get all the products and a method to get all the products by a
search query */
class Product {
  constructor() {
    this.table = "product";
  }

  // GET all the products
  async getAll() {
    const connection = await getConnection();
    return await connection.query(`SELECT * FROM ${this.table}`);
  }

  // GET product by ID
  async getById(id) {
    const connection = await getConnection();
    return await connection.query(
      `SELECT * FROM ${this.table} WHERE id = ${id}`
    );
  }

  // GET all the products by a search query
  async getByQuery(query) {
    const connection = await getConnection();
    return await connection.query(
      `SELECT * FROM ${this.table} WHERE LOWER(name) LIKE LOWER('%${query}%');`
    );
  }
}

module.exports = {
  Product,
};
