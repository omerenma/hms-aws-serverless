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
exports.DiagnosismentModel = void 0;
const database_1 = require("../database/database");
class DiagnosismentModel {
    addDiagnosis(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client.connect();
                const sql = "INSERT INTO diagnosis (treatment_name, drug_administered, doctor_name, patient_email, bill, date, paid, description,  patient_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ";
                const result = yield (yield db_connection).query(sql, [
                    data.treatment_name,
                    data.drug_administered,
                    data.doctor_name,
                    data.patient_email,
                    data.bill,
                    data.date,
                    data.paid,
                    data.description,
                    data.patient_status
                ]);
                const response = result;
                return response.rows[0];
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateDiagnosis(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client.connect();
                const query = `UPDATE diagnosis SET (bill,
        date,
        description,
        doctor_email,
        doctor_name,
        drug_administered,
        paid,
        patient_email,
        patient_status,
        treatment_name) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)  WHERE id = ${user.id}`;
                const sql = yield (db_connection).query(query, [
                    user.bill,
                    user.date,
                    user.description,
                    user.doctor_email,
                    user.doctor_name,
                    user.drug_administered,
                    user.paid,
                    user.patient_email,
                    user.patient_status,
                    user.treatment_name
                ]);
                if (sql.rows.length > 0) {
                    return sql.rows[0].id;
                }
                return sql.rows[0];
            }
            catch (error) {
                return error;
            }
        });
    }
    getPatientDiagnosis(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client.connect();
                const sql = `SELECT * FROM diagnosis WHERE email = ${email}`;
                const query = yield (yield db_connection).query(sql, [email]);
                if (!query.rows) {
                    "No record found";
                }
                return query.rows[0];
            }
            catch (error) {
                return error;
            }
        });
    }
    getAllDiagnosis() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client.connect();
                const sql = `SELECT * FROM diagnosis`;
                const query = yield db_connection.query(sql);
                return query.rows;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.DiagnosismentModel = DiagnosismentModel;
