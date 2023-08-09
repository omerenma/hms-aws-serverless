"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enquiry = exports.businnes = exports.bookAppointment = exports.doctorRoute = exports.admission = exports.patientRoute = exports.diagnosisRoute = exports.appointmentRoute = exports.userRoute = exports.paystack = void 0;
// import subscription from './subscription'
const users_1 = __importDefault(require("./users"));
exports.userRoute = users_1.default;
const appointment_1 = __importDefault(require("./appointment"));
exports.appointmentRoute = appointment_1.default;
const diagnosis_1 = __importDefault(require("./diagnosis"));
exports.diagnosisRoute = diagnosis_1.default;
const patients_1 = __importDefault(require("./patients"));
exports.patientRoute = patients_1.default;
const admission_1 = __importDefault(require("./admission"));
exports.admission = admission_1.default;
const doctors_1 = __importDefault(require("./doctors"));
exports.doctorRoute = doctors_1.default;
const bookAppointment_1 = __importDefault(require("./bookAppointment"));
exports.bookAppointment = bookAppointment_1.default;
const paystack_1 = __importDefault(require("./paystack"));
exports.paystack = paystack_1.default;
const business_1 = __importDefault(require("./business"));
exports.businnes = business_1.default;
const enquiry_1 = __importDefault(require("./enquiry"));
exports.enquiry = enquiry_1.default;
