"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diagnosisSchema = void 0;
const joi = require('joi');
exports.diagnosisSchema = joi.object({
    treatment_name: joi.string().required(),
    drug_administered: joi.string().required(),
    doctor_name: joi.string().required(),
    patient_email: joi.string().email().exist().required(),
    bill: joi.string().required(),
    paid: joi.string().required(),
    description: joi.string().required(),
    patient_status: joi.string().required(),
    date: joi.string().required()
});
