"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookAppointmentSchema = void 0;
const joi = require('joi');
exports.bookAppointmentSchema = joi.object({
    patient_id: joi.string().required(),
    doctor_id: joi.string().required(),
    appointment_date: joi.string().required()
});
