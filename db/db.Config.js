const pgp = require("pg-promise")();
require("dotenv").config();

const connection = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.Pg_USER,
  password: process.env.PG_PASSWORD,
};

const db = pgp(connection);

module.exports = db;
