const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
//  user:"postgres",
//  host:"localhost",
//  database:"students",
//  password:"p@ssword",
//  port:5432,
})
module.exports = pool