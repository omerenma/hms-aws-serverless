"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientSchema = void 0;
const joi = require('joi');
exports.patientSchema = joi.object({
    patient_name: joi.string().required(),
    patient_sex: joi.string().required(),
    dob: joi.string().required(),
    patient_email: joi.string().required().email(),
    residential_address: joi.string().required(),
    patient_phone_no: joi.string().required(),
    next_of_kin_name: joi.string().required(),
    next_of_kin_phone: joi.string().required(),
});
