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
exports.TokensModel = void 0;
const database_1 = require("../database/database");
const bcrypt = require('bcryptjs');
class TokensModel {
    addToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const sql = 'INSERT INTO tokens (token) VALUES ($1) RETURNING * ';
                const result = yield db_connection.query(sql, [token]);
                const response = result;
                return response.rows[0];
            }
            catch (error) {
                console.log('error db token', error.message);
                throw new Error(error.message);
            }
        });
    }
}
exports.TokensModel = TokensModel;
