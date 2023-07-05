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
exports.AdmissionModel = void 0;
const database_1 = require("../database/database");
class AdmissionModel {
    createAdmission(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client.connect();
                const sql = 'INSERT INTO admissions (patients_id , admission_date, discharged_date ) VALUES ($1, $2, $3) RETURNING * ';
                const result = yield db_connection.query(sql, [user.patients_id, user.admission_date, user.discharged_date]);
                const response = result;
                return response.rows[0];
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAdmission() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client.connect();
                const sql = "select * from admissions join patients on patients.patients_id = admissions.patients_id";
                const result = yield db_connection.query(sql);
                const response = result;
                return response.rows;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.AdmissionModel = AdmissionModel;
