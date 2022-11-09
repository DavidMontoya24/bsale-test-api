require("dotenv").config();

// Set the configuration for the database connection using environment variables
const dbConfig = {
  dialect: "mysql",
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = {
  dbConfig,
};
