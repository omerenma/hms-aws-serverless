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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inializeTransaction = exports.paystack_payment = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config/config"));
const paystack_payment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        (0, axios_1.default)({
            url: config_1.default.paystack_base_uri,
            method: 'POST',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${config_1.default.paystack_secret}`
            }
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.paystack_payment = paystack_payment;
const inializeTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, axios_1.default)({
            url: `${config_1.default.paystack_base_uri}/initialize`,
            method: 'POST',
            data: JSON.stringify(req.body),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${config_1.default.paystack_secret}`
            }
        });
        console.log('Initialize reponse', response);
        return response.data;
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.inializeTransaction = inializeTransaction;
