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
exports.getAllDiagnosis = exports.getPatientDiagnosis = exports.updeDiagnosis = exports.createDiagnosis = void 0;
const diagnosisVallidation_1 = require("../helpers/diagnosisVallidation");
const Diagnosis_1 = require("../models/Diagnosis");
const diagnosis = new Diagnosis_1.DiagnosismentModel();
const createDiagnosis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const { bill, date, description, doctor_name, drug_administered, paid, patient_email, patient_status, treatment_name, } = req.body;
        const { error, value } = diagnosisVallidation_1.diagnosisSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const data = {
            treatment_name,
            bill,
            date,
            description,
            doctor_name,
            drug_administered,
            paid,
            patient_email,
            patient_status,
        };
        const query = yield diagnosis.addDiagnosis(data);
        return res
            .status(201)
            .json({ message: "Diagnosis successfully added", data: query });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.createDiagnosis = createDiagnosis;
// Update Diagnosis
const updeDiagnosis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { bill, date, description, doctor_email, doctor_name, drug_administered, paid, patient_email, patient_status, treatment_name, } = req.body;
        const data = {
            id,
            bill,
            date,
            description,
            doctor_email,
            doctor_name,
            drug_administered,
            paid,
            patient_email,
            patient_status,
            treatment_name,
        };
        const result = yield diagnosis.updateDiagnosis(data);
        return res.status(200).json({ message: "Diagnosis updated successfully", data: result });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.updeDiagnosis = updeDiagnosis;
const getPatientDiagnosis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const result = yield diagnosis.getPatientDiagnosis(email);
        return res.status(200).json({ data: result });
    }
    catch (error) {
        return res.status(500).json({ message: 'Unable to fetch diagnosis result details' });
    }
});
exports.getPatientDiagnosis = getPatientDiagnosis;
const getAllDiagnosis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield diagnosis.getAllDiagnosis();
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: 'Unable to fetch diagnosis result details' });
    }
});
exports.getAllDiagnosis = getAllDiagnosis;
