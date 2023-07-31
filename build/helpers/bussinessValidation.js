"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bussinessSchema = void 0;
const joi = require('joi');
exports.bussinessSchema = joi.object({
    address: joi.string().required(),
    name: joi.string().required(),
    phone: joi.string().required(),
    email: joi.string().email().exist().required(),
    password: joi.string().required().min(8),
    //  role:joi.string().required()
});
