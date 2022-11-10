const getConnection = require("../db");

/* Setting the Product Model bt declaring a constructor Class */
class Product {
  constructor() {
    this.table = "product";
  }

  // GET all the products
  async getAll() {
    /* Getting the connection to the database and returning the result of the query. */
    const connection = await getConnection();
    return await connection.query(`SELECT * FROM ${this.table}`);
  }

  // GET all the products by a search query
  async getByQuery(query) {
    /* Getting the connection to the database and returning the result of the query. */
    const connection = await getConnection();
    return await connection.query(
      `SELECT * FROM ${this.table} WHERE LOWER(name) LIKE LOWER('%${query}%');`
    );
  }

  // GET product by ID
  async getById(id) {
    /* Getting the connection to the database and returning the result of the query. */
    const connection = await getConnection();
    return await connection.query(
      `SELECT * FROM ${this.table} WHERE id = ${id}`
    );
  }
}

module.exports = {
  Product,
};
