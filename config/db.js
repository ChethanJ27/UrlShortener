const { Pool } = require("pg")
const dotenv = require("dotenv")
dotenv.config()

const pool = new Pool({
  user: process.env.PGUSER || "postgres",
  host: process.env.PGHOST || "localhost",
  database: process.env.PGDATABASE || "postgres",
  password: process.env.PGPASSWORD || "postgres",
  port: process.env.PGPORT || "5432",
})


module.exports.getConnectionAndQuery = async (query) => {
  const { rows } = await pool.query(query)
  return rows
}

module.exports.getClientForTransaction = async () => {
  const client = pool.connect()
  return client;
}
