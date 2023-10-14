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
exports.AppointmentModel = void 0;
const database_1 = require("../database/database");
class AppointmentModel {
    addAppointment(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const sql = 'INSERT INTO appointments (patient_id, doctor_id, appointment_date, business_id) VALUES ($1, $2, $3, $4) RETURNING * ';
                const select_doctor = `select * from  doctors where doctors.id = ($1) `;
                const select_patient = `select * from  patients where patients.id = ($1) `;
                const result = yield db_connection.query(sql, [user.patient_id, JSON.parse(user.doctor_id), user.appointment_date, user.business_id]);
                const doctor_result = yield db_connection.query(select_doctor, [JSON.parse(user.doctor_id)]);
                const patient_result = yield db_connection.query(select_patient, [user.patient_id]);
                const response = result;
                const doc_response = doctor_result;
                return Object.assign(Object.assign(Object.assign({}, response.rows[0]), doc_response.rows[0]), patient_result.rows[0]);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAppointment() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                // const sql = "select * from appointments join patients on patients.id::varchar = appointments.patients_id join doctors on doctors.id_doctor::varchar=appointments.doctor_id";
                const sql = "select * from appointments join patients on patients.id::varchar = appointments.patient_id join doctors on doctors.id::varchar=appointments.doctor_id join users on users.id  = doctors.id";
                const result = yield db_connection.query(sql);
                const response = result;
                return response.rows;
            }
            catch (error) {
                return error;
            }
        });
    }
    getAppointmentByDoctorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const sql = "select * from appointments join doctors on doctors.id::varchar = appointments.doctor_id::varchar join patients on patients.id::varchar = appointments.patient_id::varchar WHERE doctors.id = ($1)";
                const result = yield db_connection.query(sql, [id]);
                return result.rows;
            }
            catch (error) {
                return error.message;
            }
        });
    }
}
exports.AppointmentModel = AppointmentModel;
