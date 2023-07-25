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
exports.BusinessModel = void 0;
const database_1 = require("../database/database");
const bcrypt = require('bcryptjs');
class BusinessModel {
    addBusiness(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const queryId = 'select * from business where email = ($1)';
                const query_result = yield db_connection.query(queryId, [data.email]);
                if (query_result.rows.length > 0) {
                    throw new Error('Business already exists');
                }
                const hash = bcrypt.hashSync(data.password, 10);
                const sql = 'INSERT INTO business (name, email, phone,role, address, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ';
                const result = yield db_connection.query(sql, [data.name, data.email, data.phone, data.role, data.address, hash]);
                const response = result;
                return response.rows[0];
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.BusinessModel = BusinessModel;
