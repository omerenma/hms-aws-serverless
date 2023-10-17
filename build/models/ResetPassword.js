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
exports.ResetPasswordModel = void 0;
const database_1 = require("../database/database");
class ResetPasswordModel {
    resetPassword(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const checkToken = "SELECT * FROM tokens WHERE token=($1)";
                const deleteToken = "DELETE FROM tokens WHERE token=($1)";
                const query_token = yield db_connection.query(checkToken, [token]);
                if (!query_token.rows) {
                    throw new Error(`User  not found for this email.`);
                }
                else {
                    // update password column-
                    // delete token from db
                    // await db_connection.query(deleteToken, [token])
                    return query_token.rows;
                }
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    updatePassword(password, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const queryUser = `select * from users where email = ($1)`;
                const updateUserPassword = `UPDATE users SET password = $1 where "email" = $2 RETURNING *`;
                const query = yield db_connection.query(queryUser, [email]);
                if (query.rows.length) {
                    const update = yield db_connection.query(updateUserPassword, [password, email]);
                    return update;
                    // return query.rows[0]
                }
                else {
                    throw new Error('Password update not successful');
                }
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.ResetPasswordModel = ResetPasswordModel;
