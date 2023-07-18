import dotenv = require('dotenv')
dotenv.config({path: __dirname + `../../env`})

const config = {
    pgHost:process.env.POSTGRES_HOST,
    pgPort:process.env.PGPORT,
    pgDB:process.env.POSTGRES_DB,
    pgUser:process.env.POSTGRES_USER,
    pgPassword:process.env.POSTGRES_PASSWORD,
    RDS_HOSTNAME:process.env.RDS_HOSTNAME,
    RDS_PORT:process.env.RDS_PORT,
    RDS_DB_NAME:process.env.RDS_DB_NAME,
    RDS_USERNAME:process.env.RDS_USERNAME,
    RDS_PASSWORD:process.env.RDS_PASSWORD,
    serverPort:process.env.server,
    paystack_base_uri:process.env.PAYSTACK_BASE_URI,
    paystack_secret:process.env.PAYSTACK_TEST_SECRET_KEY

}
export default config

// export default {
//     development: {
//         username: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_DATABASE,
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         dialect: process.env.DB_DIALECT,
//         dialectOptions: {
//             bigNumberStrings: true
//         }
//     },
//     test: {
//         username: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_DATABASE,
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         dialect: process.env.DB_DIALECT,
//     },
//     production: {
//         username: process.env.RDS_USERNAME,
//         password: process.env.RDS_PASSWORD,
//         database: process.env.RDS_DB_NAME,
//         host: process.env.RDS_HOSTNAME,
//         port: process.env.RDS_PORT,
//         dialect: process.env.DIALECT,
//         dialectOptions: {
//             bigNumberStrings: true,
//         }
//     }
// };