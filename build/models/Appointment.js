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
                const sql = 'INSERT INTO appointments (patients_id, doctor_id, appointment_date) VALUES ($1, $2, $3) RETURNING * ';
                const result = yield db_connection.query(sql, [user.patients_id, user.doctor_id, user.appointment_date]);
                const response = result;
                return response.rows[0];
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
                const sql = "select * from appointments join patients on patients.id::varchar = appointments.patients_id join doctors on doctors.id_doctor::varchar=appointments.doctor_id";
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
                const sql = "SELECT * FROM appointments JOIN doctors ON id_doctor = doctor_id WHERE id_doctor = ($1)";
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
