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
exports.getAppointmentByDoctorId = exports.getAppointments = exports.createAppointment = void 0;
const bookAppointmentValidation_1 = require("../helpers/bookAppointmentValidation");
const BookAppointments_1 = require("../models/BookAppointments");
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = new BookAppointments_1.BookAppointmentModel();
    try {
        const { patient_id, doctor_id, appointment_date } = req.body;
        const { error, value } = bookAppointmentValidation_1.bookAppointmentSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const data = { patient_id, doctor_id, appointment_date };
        const query = yield appointment.booAppointment(data);
        return res.status(201).json({ message: `An appointment has been scheduled for ${JSON.parse(data.doctor_id)} and ${data.patient_id} `, data: query });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.createAppointment = createAppointment;
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = new BookAppointments_1.BookAppointmentModel();
    try {
        const response = yield appointment.getAppointment();
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.getAppointments = getAppointments;
const getAppointmentByDoctorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = new BookAppointments_1.BookAppointmentModel();
    try {
        const { id } = req.params;
        // const check = req.user
        const response = yield appointment.getAppointmentByDoctorId(id);
        return res.status(200).json(response);
    }
    catch (error) {
        return error.message;
    }
});
exports.getAppointmentByDoctorId = getAppointmentByDoctorId;
