"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
exports.sequelize = new Sequelize(process.env.RDS_USERNAME, process.env.RDS_PASSWORD, {
    host: process.env.RDS_HOSTNAME,
    dialect: process.env.DIALECT,
    ssl: false
});
