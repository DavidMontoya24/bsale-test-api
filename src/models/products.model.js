const getConnection = require("../db");

/* Setting the Product Model bt declaring a constructor Class */
class Product {
  constructor() {
    this.table = "product";
  }

  // GET all the products
  async findAll() {
    /* Getting the connection to the database and returning the result of the query. */
    const connection = await getConnection();
    return await connection.query("SELECT * FROM ??", [this.table]);
  }

  // GET all the products by a search query
  async findByQuery(query) {
    /* Getting the connection to the database and returning the result of the query. */
    const connection = await getConnection();
    return await connection.query(
      `SELECT * FROM ?? WHERE LOWER(name) LIKE LOWER(?);`,
      [this.table, `%${query}%`]
    );
  }

  // GET product by ID
  async findById(id) {
    /* Getting the connection to the database and returning the result of the query. */
    const connection = await getConnection();
    return await connection.query(`SELECT * FROM ?? WHERE id = ?`, [
      this.table,
      `${id}`,
    ]);
  }
}

module.exports = {
  Product,
};
