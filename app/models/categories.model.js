const { getConnection } = require("../db");

const Category = async (id) => {
  const connection = await getConnection();
  // let allCategories = await id ? connection.query(
  //   `SELECT * FROM product WHERE category LIKE ${id};`
  // ) : connection.query("SELECT * FROM category");
  let allCategories = await connection.query("SELECT * FROM category");
  if (id) {
    allCategories = await connection.query(
      `SELECT * FROM product WHERE category LIKE ${id};`
    );
  }
  const response = Object.values(JSON.parse(JSON.stringify(allCategories)));
  return response;
};

module.exports = {
  Category,
};
