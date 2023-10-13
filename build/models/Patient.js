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
exports.PatientModel = void 0;
const database_1 = require("../database/database");
class PatientModel {
    addPatient(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const sql = "INSERT INTO patients (patient_name, patient_sex, dob,residential_address , patient_email, patient_phone_no, next_of_kin_name, next_of_kin_phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ";
                const result = yield db_connection.query(sql, [
                    user.patient_name,
                    user.patient_sex,
                    user.dob,
                    user.residential_address,
                    user.patient_email,
                    user.patient_phone_no,
                    user.next_of_kin_name,
                    user.next_of_kin_phone,
                ]);
                const response = result;
                return response.rows[0];
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    // Delete patient
    deletePatient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const query_id = "DELETE  from patients WHERE id = ($1)";
                const sql = yield db_connection.query(query_id, [id]);
                if (sql.rows.length > 0) {
                    return sql.rows[0];
                }
                return sql.rows[0];
            }
            catch (error) {
                return error;
            }
        });
    }
    // UPDATE patient
    editPatient(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = JSON.stringify(user.id);
            try {
                const db_connection = yield database_1.client_dev.connect();
                const query = `UPDATE patients SET (patient_name, patient_sex, dob, residential_address, patient_email, patient_phone_no,next_of_kin_name,next_of_kin_phone) = ($1, $2, $3, $4, $5,- $6, $7, $8)  WHERE patients.id = ${id}`;
                const sql = yield db_connection.query(query, [user.patient_name, user.patient_sex, user.dob, user.residential_address, user.patient_email, user.patient_phone_no, user.next_of_kin_name, user.next_of_kin_phone]);
                console.log('sql', sql);
                if (sql.rows.length > 0) {
                    sql.rows[0];
                }
                return sql.rows[0];
            }
            catch (error) {
                return error;
            }
        });
    }
    // Get Patient
    getPatients() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client_dev.connect();
                const sql = `SELECT * FROM patients`;
                const query = yield (yield db_connection).query(sql);
                return query.rows;
            }
            catch (error) {
                return error;
            }
        });
    }
    getPatientsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const sql = `SELECT * FROM patients WHERE id = ($1)`;
                const query = yield db_connection.query(sql, [id]);
                return query.rows[0];
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.PatientModel = PatientModel;
