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
class BusinessModel {
    addBusiness(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                // const queryId = 'select * from subscription where id = ($1)'
                // const query_result = await db_connection.query(queryId,[data.id])
                // console.log(query_result.rows, 'id response from db')
                const sql = 'INSERT INTO businesses ( first_name, last_name, email, phone, password, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ';
                const result = yield db_connection.query(sql, [data.first_name, data.last_name, data.email, data.phone, data.password, data.role]);
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
