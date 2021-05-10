// const { Pool } = require("pg");
//
// const pool = new Pool({
//     host: "localhost",
//     user: "postgres",
//     password: "VioCorn2021",
//     port: 5432,
//     database: "authtodo"
// });
//
// module.exports = pool;

var spicedPg = require("spiced-pg");

const dbUrl =
    process.env.DATABASE_URL ||
    "postgres:postgres:postgres@localhost:5432/authtodo";

const db = spicedPg(dbUrl);
module.exports = db;
