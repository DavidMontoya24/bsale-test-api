// Get the client
const mysql = require("promise-mysql");
// Get the confguration of the database
const { dbConfig } = require("./db.config");

// Create the connection pool, this helps us with the reconnection
const db = mysql.createPool({
  host: dbConfig.HOST,
  database: dbConfig.DB,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
});

const getConnection = () => {
  return db;
};

module.exports = {
  getConnection,
};
