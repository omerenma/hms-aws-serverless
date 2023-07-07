"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admissionSchema = void 0;
const joi = require('joi');
exports.admissionSchema = joi.object({
    patients_id: joi.string().required(),
    admission_date: joi.string().required(),
    admission_room_number: joi.string().required(),
    ailment: joi.string().required()
});
