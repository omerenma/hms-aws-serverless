const dotenv = require("dotenv");
import { Pool, Client } from "pg";
import pg = require('pg')

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  PGPORT,
  POSTGRES_DB_TEST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  ENV,
} = process.env;




export const client = new Pool({
  host:process.env.RDS_HOSTNAME,
  user:process.env.RDS_USERNAME,
  password:process.env.RDS_PASSWORD,
  port:5432
})

export const client_dev = new Pool({
  database: POSTGRES_DB,
  host:POSTGRES_HOST,
  user:POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  port:5432
})


