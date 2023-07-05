"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const joi = require('joi');
exports.registerSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().exist().required(),
    password: joi.string().required().min(8),
    role: joi.string().required()
});
exports.loginSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
});
