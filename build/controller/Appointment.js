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
exports.getDoctorAppointment = exports.getAppointment = exports.createAppointment = void 0;
const appointmentVallidation_1 = require("../helpers/appointmentVallidation");
const Appointment_1 = require("../models/Appointment");
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = new Appointment_1.AppointmentModel();
    try {
        const { patients_id, doctor_id, appointment_date, } = req.body;
        const { error, value } = appointmentVallidation_1.appointmentSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const data = { patients_id, doctor_id, appointment_date };
        const query = yield appointment.addAppointment(data);
        return res.status(201).json({ message: `An appointment has been scheduled with ${data.doctor_id} and ${data.patients_id} `, data: query });
    }
    catch (error) {
        console.log('Appointment Error', error);
        return res.status(500).json({ message: "Something went wrong...", error });
    }
});
exports.createAppointment = createAppointment;
const getAppointment = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = new Appointment_1.AppointmentModel();
    try {
        const response = yield appointment.getAppointment();
        return res.status(200).json(response);
    }
    catch (error) {
        return error;
    }
});
exports.getAppointment = getAppointment;
const getDoctorAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = new Appointment_1.AppointmentModel();
    try {
        const id = req.params.id;
        const response = yield appointment.getAppointmentByDoctorId(id);
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong", error });
    }
});
exports.getDoctorAppointment = getDoctorAppointment;
