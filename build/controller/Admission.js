"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdmission = exports.createAdmission = void 0;
const Admission_1 = require("../models/Admission");
const admissionValidation_1 = require("../helpers/admissionValidation");
const createAdmission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admission = new Admission_1.AdmissionModel();
    try {
        const { patients_id, admission_date, admission_room_number, ailment } = req.body;
        const { error, value } = admissionValidation_1.admissionSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const data = { patients_id, admission_date, admission_room_number, ailment };
        const query = yield admission.createAdmission(data);
        return res
            .status(201)
            .json({ message: `Patient has been admitted `, data: query });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.createAdmission = createAdmission;
const getAdmission = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admission = new Admission_1.AdmissionModel();
    try {
        const response = yield admission.getAdmission();
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.getAdmission = getAdmission;
