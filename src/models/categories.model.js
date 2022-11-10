const getConnection = require("../db");

/* Setting the Category Model bt declaring a constructor Class */
class Category {
  constructor() {
    this.table = "category";
  }

  // GET all the categories
  async findAll() {
    /* Getting the connection to the database and returning the result of the query. */
    const connection = await getConnection();
    return await connection.query("SELECT * FROM ??", [this.table]);
  }

  // GET all the products in specified category
  async findById(id) {
    /* Getting the connection to the database and returning the result of the query. */
    const connection = await getConnection();
    return await connection.query(
      `SELECT * FROM product WHERE category LIKE ?;`,
      [`${id}`]
    );
  }
}

module.exports = {
  Category,
};
