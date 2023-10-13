"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorRemarkSchema = void 0;
const joi = require('joi');
exports.doctorRemarkSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    phone_no: joi.string().required(),
    message: joi.string().required(),
    doctor_id: joi.string().required()
});
