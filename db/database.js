// PG database client/connection setup
const { Pool } = require("pg");
// const dbParams = require("./lib/db.js");
const db = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect();

module.exports = db;
