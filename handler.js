'use strict';
import app from './src/server'
import serverless from 'serverless-http'
module.exports.hmsApi = async (event) => {
    return "Hello from Lambda Function"
}
