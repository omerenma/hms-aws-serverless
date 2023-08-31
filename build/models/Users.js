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
exports.UsersModel = exports.sessions = void 0;
const database_1 = require("../database/database");
const bcrypt = require('bcryptjs');
exports.sessions = {};
class UsersModel {
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const checkEmail = "SELECT * FROM users WHERE email=($1)";
                const query_email = yield db_connection.query(checkEmail, [user.email]);
                if (query_email.rows.length > 0) {
                    throw new Error(`User with email: ${user.email},  already exist.`);
                }
                else {
                    const hash = bcrypt.hashSync(user.password, 10);
                    const sql = 'INSERT INTO users (business_id, name, email, role, password) VALUES ($1, $2, $3, $4, $5) RETURNING * ';
                    const result = yield db_connection.query(sql, [user.business_id, user.name, user.email, user.role, hash]);
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
                const db_connection = yield database_1.client_dev.connect();
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
    // save refresh token to db after successful login
    saveToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const sql = 'INSERT INTO tokens (token) VALUES ($1) RETURNING * ';
                const result = yield db_connection.query(sql, [token]);
                return result.rows[0];
            }
            catch (error) {
                // @ts-ignore
                return error.message;
            }
        });
    }
    // Verify refresh token
    verifyRefreshToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const check_token = 'SELECT * FROM tokens where token = ($1)';
                const query_token = yield db_connection.query(check_token, [token]);
                if (!query_token) {
                    throw new Error('No token was found in the database');
                }
                return query_token.rows[0]['token'];
            }
            catch (error) {
                // @ts-ignore
                return error.message;
            }
        });
    }
    // Get all users
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
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
            try {
                const db_connection = database_1.client_dev.connect();
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
                const db_connection = database_1.client_dev.connect();
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
                const db_connection = yield database_1.client_dev.connect();
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
                const db_connection = database_1.client_dev.connect();
                const sql = `SELECT * FROM users WHERE role = 'doctor' `;
                const query = yield (yield db_connection).query(sql);
                return query.rows;
            }
            catch (error) {
                return error;
            }
        });
    }
    getSession(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = exports.sessions[sessionId];
            return session && session.valid ? session : null;
        });
    }
    invalidateSession(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = exports.sessions[sessionId];
            if (session) {
                // @ts-ignore
                exports.sessions[sessionId].valid = false;
            }
            return exports.sessions[sessionId];
        });
    }
    createSession(email, name) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const sessionId = Object.keys(exports.sessions).length + 1;
            const session = { sessionId, email, valid: true, name };
            // @ts-ignore
            exports.sessions[sessionId] = session;
            return session;
        });
    }
    getUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const db_connection = yield database_1.client_dev.connect();
            const checkEmail = "SELECT * FROM users WHERE email=($1)";
            const query_email = yield db_connection.query(checkEmail, [email]);
            return query_email;
        });
    }
}
exports.UsersModel = UsersModel;
