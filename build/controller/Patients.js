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
exports.getPatientsById = exports.getPatients = exports.editPatient = exports.deletPatient = exports.createPatient = void 0;
const Patient_1 = require("../models/Patient");
const patientValidation_1 = require("../helpers/patientValidation");
const patient = new Patient_1.PatientModel();
const createPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = patientValidation_1.patientSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const { name, dob, sex, residential_address, email, phone_no, next_of_kin_name, next_of_kin_phone } = req.body;
        const data = { name, dob, sex, email, residential_address, phone_no, next_of_kin_name, next_of_kin_phone, };
        const result = yield patient.addPatient(data);
        return res.status(201).json({ message: "Patient added successfully", data: result });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
});
exports.createPatient = createPatient;
// Delete Patient
const deletPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield patient.deletePatient(id);
        return res
            .status(201)
            .json({ message: "Patient deleted successfully", data: result });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.deletPatient = deletPatient;
// Edit Patient
const editPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { status, } = req.body;
        const data = { id, status };
        const result = yield patient.editPatient(data);
        return res.status(200).json({ message: "Record updated successfully", data: result });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.editPatient = editPatient;
const getPatients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield patient.getPatients();
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.getPatients = getPatients;
const getPatientsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield patient.getPatientsById(id);
        return res.status(200).json({ data: result });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.getPatientsById = getPatientsById;
