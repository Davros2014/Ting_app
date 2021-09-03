var spicedPg = require("spiced-pg");

const dbUrl =
    process.env.DATABASE_URL ||
    "postgres:postgres:postgres@localhost:5432/authtodo";

const db = spicedPg(dbUrl);
module.exports = db;
