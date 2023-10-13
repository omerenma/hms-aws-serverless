"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocotrSchema = void 0;
const joi = require('joi');
exports.createDocotrSchema = joi.object({
    name: joi.string().required(),
    business_id: joi.string().required(),
    email: joi.string().email().exist().required(),
    sex: joi.string().required(),
    dob: joi.string().required(),
    phone_no: joi.string().required(),
    specialty: joi.string().required(),
    //id_doctor:joi.string().required()
});
