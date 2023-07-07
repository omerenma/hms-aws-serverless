"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentSchema = void 0;
const joi = require('joi');
exports.appointmentSchema = joi.object({
    patients_id: joi.string().required(),
    doctor_id: joi.string().required(),
    appointment_date: joi.string().required()
});
