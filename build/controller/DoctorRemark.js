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
exports.createDoctorRemark = void 0;
const AddDoctorRemark_1 = require("../models/AddDoctorRemark");
const doctorRemark_1 = require("../helpers/doctorRemark");
const createDoctorRemark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const remark = new AddDoctorRemark_1.DoctorRemarkModel();
    try {
        const { doctor_id, name, email, phone_no, message, } = req.body;
        const { error, value } = doctorRemark_1.doctorRemarkSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const data = { doctor_id, name, email, phone_no, message };
        const query = yield remark.addEnquiry(data);
        return res.status(201).json({ message: `Remark successfully added` });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong...", error });
    }
});
exports.createDoctorRemark = createDoctorRemark;
