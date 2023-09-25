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
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config/config"));
const Paystack_1 = __importDefault(require("./Paystack"));
class PaystackApi extends Paystack_1.default {
    constructor() {
        super(config_1.default.paystack_base_uri);
        this.requestInt = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${config_1.default.paystack_secret}`
            }
        };
        this.getTequestInt = {
            headers: {
                Authorization: `Bearer ${config_1.default.paystack_secret}`
            }
        };
        this.initializePayment = (paymentDetails) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.post(`/transaction/initialize`, paymentDetails, undefined, this.requestInt);
            return response.data;
        });
        this.verifyPayment = (reference) => __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get("https://api.paystack.co/transaction/verify/" + reference, {
                headers: {
                    Authorization: `Bearer sk_test_25cb401b5cca6f6fe50498949d3689b4629e3a81`
                }
            });
            //    const response = await  this.get(`/transaction/verify/${paymentReference}`, 
            //    this.getTequestInt.headers
            //    )
            return response.data;
        });
    }
}
const paystackApi = new PaystackApi();
exports.default = paystackApi;
