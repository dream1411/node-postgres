const Pool = require('pg').Pool;

const pool = new Pool({
    connectionString: "postgres://default:kPwAu79HUoRf@ep-proud-queen-26619993-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
    // user:"default",
    // host:"ep-proud-queen-26619993-pooler.ap-southeast-1.postgres.vercel-storage.com",
    // database:"verceldb",
    // password:"kPwAu79HUoRf",
    // port:5432,
//  user:"postgres",
//  host:"localhost",
//  database:"students",
//  password:"p@ssword",
//  port:5432,
})
module.exports = pool