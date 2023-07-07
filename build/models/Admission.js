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
    createAdmission(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const sql = 'INSERT INTO admissions (patients_id , admission_date, admission_room_number, ailment ) VALUES ($1, $2, $3, $4) RETURNING * ';
                const result = yield db_connection.query(sql, [data.patients_id, data.admission_date, data.admission_room_number, data.ailment]);
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
                const db_connection = yield database_1.client_dev.connect();
                const sql = "select * from admissions join patients on patients.id = admissions.patients_id";
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
