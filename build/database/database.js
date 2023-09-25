"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client_dev = exports.client = void 0;
const dotenv = require("dotenv");
const pg_1 = require("pg");
dotenv.config();
const { POSTGRES_HOST, POSTGRES_DB, PGPORT, POSTGRES_DB_TEST, POSTGRES_USER, POSTGRES_PASSWORD, ENV, } = process.env;
exports.client = new pg_1.Pool({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: 5432
});
exports.client_dev = new pg_1.Pool({
    database: POSTGRES_DB,
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: 5432
});
