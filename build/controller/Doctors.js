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
exports.editUser = exports.deleteUser = exports.getDocotrById = exports.getDoctors = exports.createDoctor = void 0;
const doctorValidation_1 = require("../helpers/doctorValidation");
const Doctors_1 = require("../models/Doctors");
const user = new Doctors_1.DoctorModel();
// Add doctor
const createDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = doctorValidation_1.createDocotrSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const { name, email, sex, dob, phone_no, specialty } = req.body;
        const data = { name, email, sex, dob, phone_no, specialty };
        yield user.addDoctor(data);
        return res.status(201).json({ message: "Doctor registered successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.createDoctor = createDoctor;
// Get all doctors
const getDoctors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user.getdoctors();
        return res.json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to fetch records" });
    }
});
exports.getDoctors = getDoctors;
// Get a single user
const getDocotrById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield user.getUserById(parseInt(id));
        return res.json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to fetch records" });
    }
});
exports.getDocotrById = getDocotrById;
// Delete doctor
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield user.deleteDoctor(id);
        return res.status(200).json({
            message: `User has been deleted successfully`,
            data: result,
        });
    }
    catch (error) {
        return res.status(400).json({ message: "Something went wrong" });
    }
});
exports.deleteUser = deleteUser;
// Edit user
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, email, sex, dob, phone_no, specialty } = req.body;
        const result = yield user.editDoctor(id, name, email, sex, dob, phone_no, specialty);
        if (result) {
            return res.status(200).json(result);
        }
        else {
            return res
                .status(404)
                .json({ message: "No user found for the operation" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.editUser = editUser;
