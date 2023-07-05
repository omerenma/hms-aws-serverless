"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentSchema = void 0;
const joi = require('joi');
exports.appointmentSchema = joi.object({
    patient_name: joi.string().required().min(6),
    doctor_email: joi.string().email().exist().required(),
    patient_email: joi.string().email().exist().required(),
    date: joi.string().required()
});
