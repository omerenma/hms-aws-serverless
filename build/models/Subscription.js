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
exports.SubscriptionModel = void 0;
const database_1 = require("../database/database");
class SubscriptionModel {
    addSubscription(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db_connection = yield database_1.client_dev.connect();
                const checkEmail = "SELECT * FROM subscription WHERE email=($1)";
                const query_email = yield db_connection.query(checkEmail, [data.email]);
                if (query_email.rows.length > 0) {
                    throw new Error(`You are already subscribed`);
                }
                else {
                    const sql = "INSERT INTO subscription (subscription_id, amount, reference, name, email, phone, subscription_status,  expired) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ";
                    const result = yield db_connection.query(sql, [
                        data.subscription_id,
                        data.amount,
                        data.reference,
                        data.name,
                        data.email,
                        data.phone,
                        data.subscription_status,
                        //   data.start_at,
                        //   data.end_at,
                        data.expired
                    ]);
                    const response = result;
                    return response.rows[0];
                }
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.SubscriptionModel = SubscriptionModel;
