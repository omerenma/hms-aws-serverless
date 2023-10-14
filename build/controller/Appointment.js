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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDoctorAppointmentById = exports.getAppointment = exports.createAppointment = void 0;
const appointmentVallidation_1 = require("../helpers/appointmentVallidation");
const Appointment_1 = require("../models/Appointment");
const EmailService_1 = __importDefault(require("../notifications/EmailService"));
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = new Appointment_1.AppointmentModel();
    try {
        const { patient_id, doctor_id, appointment_date, business_id } = req.body;
        const { error, value } = appointmentVallidation_1.appointmentSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const data = { patient_id, doctor_id, appointment_date, business_id };
        const query = yield appointment.addAppointment(data);
        // TODO => send email notification to the doctor and patience informing them about the appointment
        let messageoptions = {
            from: process.env.EMAIL_SMTP_USER,
            to: query && query.email,
            subject: `Appointment has been scheduled for ${query && query.email} with ${query && query.patient_email} at ${query && query.appointment_date}`,
            // html: data,
        };
        try {
            yield (0, EmailService_1.default)(messageoptions);
        }
        catch (error) {
            throw new Error(error);
        }
        return res.status(201).json({ message: `An appointment has been scheduled with ${query && query.email} and ${query && query.patient_email} `, data: query });
    }
    catch (error) {
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
const getDoctorAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.getDoctorAppointmentById = getDoctorAppointmentById;
