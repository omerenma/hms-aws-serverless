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
exports.PasswordResetModel = exports.sessions = void 0;
const database_1 = require("../database/database");
const bcrypt = require('bcryptjs');
exports.sessions = {};
class PasswordResetModel {
    resetPassword(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const checkEmail = "SELECT * FROM users WHERE users.email = ($1)";
                const query_email = yield db_connection.query(checkEmail, [user.email]);
                if (!query_email.rows) {
                    throw new Error(`User not found.`);
                }
                else {
                    return query_email.rows[0];
                }
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.PasswordResetModel = PasswordResetModel;
