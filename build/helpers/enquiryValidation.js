"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enquirySchema = void 0;
const joi = require('joi');
exports.enquirySchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    message: joi.string().required()
});
