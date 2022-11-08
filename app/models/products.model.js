const { getConnection } = require("../db");

const Product = async (query) => {
  const connection = await getConnection();
  let allProducts = await connection.query("SELECT * FROM product");
  if (query) {
    allProducts = await connection.query(
      `SELECT * FROM product WHERE LOWER(name) LIKE LOWER('%${query}%');`
    );
  }
  const response = Object.values(JSON.parse(JSON.stringify(allProducts)));
  return response;
};

module.exports = {
  Product,
};
