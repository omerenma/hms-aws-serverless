"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admissionSchema = void 0;
const joi = require('joi');
exports.admissionSchema = joi.object({
    admission_date: joi.string().required(),
    discharged_date: joi.string().required(),
    patients_id: joi.string().required()
});
