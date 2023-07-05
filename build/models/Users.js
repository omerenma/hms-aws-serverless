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
exports.UsersModel = void 0;
const database_1 = require("../database/database");
const bcrypt = require('bcryptjs');
class UsersModel {
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client.connect();
                const checkEmail = `SELECT email FROM users WHERE email=($1)`;
                const query_email = yield db_connection.query(checkEmail, [user.email]);
                if (query_email.rows.length > 0) {
                    throw new Error(`User with email: ${user.email},  already exist.`);
                }
                else {
                    const hash = bcrypt.hashSync(user.password, 10);
                    const sql = 'INSERT INTO users (name, email, role, password) VALUES ($1, $2, $3, $4) RETURNING * ';
                    const result = yield db_connection.query(sql, [user.name, user.email, user.role, hash]);
                    const response = result;
                    return response.rows[0];
                }
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let isMatch;
                const db_connection = yield database_1.client.connect();
                const check_email = 'select * from users where email = ($1)';
                const query_email = yield db_connection.query(check_email, [email]);
                let query_result = query_email.rows;
                if (query_result.length !== 0) {
                    isMatch = yield bcrypt.compare(password, query_email.rows[0].password);
                }
                if (!isMatch) {
                    return Promise.reject("Incorrect login credentials");
                }
                return query_result.length === 1 && isMatch === true ? query_result[0] : null;
            }
            catch (error) {
                return error.message;
            }
        });
    }
    // Get all users
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client.connect();
                const sql = `SELECT * FROM users`;
                const query = yield db_connection.query(sql);
                return query.rows;
            }
            catch (error) {
                return error;
            }
        });
    }
    // Get all users
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            try {
                const db_connection = database_1.client.connect();
                const sql = `SELECT * FROM users WHERE id = ($1)`;
                const query = yield (yield db_connection).query(sql, [id]);
                return query.rows;
            }
            catch (error) {
                return error;
            }
        });
    }
    // Delete user
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client.connect();
                const query_id = `DELETE  FROM users WHERE id =($1)`;
                const sql = yield (yield db_connection).query(query_id, [id]);
                return sql.rows[0];
            }
            catch (error) {
                return error;
            }
        });
    }
    // UPDATE user
    editUser(id, name, email, role) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client.connect();
                // const query_id = `select * from users where id = ${id}`
                // const id_result = await db_connection.query(query_id)
                // if(id_result.rowCount != 0){
                //     throw new Error("No user found for the operation")
                // }
                const query = `UPDATE users SET name = $1, email = $2, role = $3 WHERE id = ${id}`;
                const result = yield db_connection.query(query, [name, email, role]);
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
    // Get Doctors
    getDoctors() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = database_1.client.connect();
                const sql = `SELECT * FROM users WHERE role = 'doctor' `;
                const query = yield (yield db_connection).query(sql);
                return query.rows;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.UsersModel = UsersModel;
