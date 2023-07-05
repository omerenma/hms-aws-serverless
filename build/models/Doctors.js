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
exports.DoctorModel = void 0;
const database_1 = require("../database/database");
class DoctorModel {
    addDoctor(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client.connect();
                // Query Users table
                const user_email = `select * from users where email = ($1)`;
                const users = yield db_connection.query(user_email, [data.email]);
                const doctor_data = users.rows;
                const checkEmail = `SELECT email FROM doctors WHERE email=($1)`;
                const query_email = yield db_connection.query(checkEmail, [data.email]);
                if (query_email.rows.length > 0) {
                    throw new Error(`Doctor with email: ${data.email},  already exist.`);
                }
                else {
                    const sql = 'INSERT INTO doctors (id_doctor, name, email, sex, phone_no, dob, specialty) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * ';
                    doctor_data.map(item => {
                        const datas = {
                            id_doctor: item.id,
                            name: item.name,
                            email: item.email,
                            sex: data.sex,
                            dob: data.dob,
                            phone_no: data.phone_no,
                            specialty: data.specialty
                        };
                        const result = db_connection.query(sql, [datas.id_doctor, datas.name, datas.email, datas.sex, datas.phone_no, datas.dob, datas.specialty]);
                        const response = result;
                        return response;
                    });
                    return doctor_data[0];
                }
            }
            catch (error) {
                return error.message;
            }
        });
    }
    // Get all users
    getdoctors() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client.connect();
                const sql = `SELECT * FROM doctors`;
                const query = yield (yield db_connection).query(sql);
                return query.rows;
            }
            catch (error) {
                return error;
            }
        });
    }
    // Get single Doctor
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client.connect();
                const sql = `SELECT * FROM doctors WHERE id = ($1)`;
                const query = yield (yield db_connection).query(sql, [id]);
                return query.rows;
            }
            catch (error) {
                return error.message;
            }
        });
    }
    // Delete Doctor
    deleteDoctor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client.connect();
                const query_id = `DELETE  FROM doctors WHERE id =($1)`;
                const sql = yield (yield db_connection).query(query_id, [id]);
                return sql.rows[0];
            }
            catch (error) {
                return error;
            }
        });
    }
    // UPDATE user
    editDoctor(id, name, email, sex, dob, phone_no, specialty) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client.connect();
                const query = `UPDATE doctors SET name = $1, email = $2, sex = $3, dob = $4, phone_no = $5, specialty = $6 WHERE id = ${id}`;
                const result = yield db_connection.query(query, [name, email, sex, dob, phone_no, specialty]);
                if (result.rowCount !== 0) {
                    return result.rows[0];
                }
                return result.rows[0];
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.DoctorModel = DoctorModel;
