const { Sequelize } = require("sequelize");
import dotenv = require('dotenv')

dotenv.config()

export const sequelize = new Sequelize(process.env.RDS_USERNAME, process.env.RDS_PASSWORD,{
    host: process.env.RDS_HOSTNAME,
     dialect: process.env.DIALECT ,
     ssl:false
  }
);



