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
const PaystackApi_1 = __importDefault(require("../api/PaystackApi"));
const axios_1 = require("axios");
const Subscription_1 = require("../models/Subscription");
const subscription = new Subscription_1.SubscriptionModel();
class PaystackController {
    constructor() {
        this.initializePayment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { amount, email, callbackUri, name, phone } = req.body;
                const paymentDetails = {
                    amount,
                    email,
                    phone,
                    name,
                    callback_url: callbackUri,
                    metadata: {
                        amount,
                        email,
                        name,
                        phone
                    },
                };
                const data = yield PaystackApi_1.default.initializePayment(paymentDetails);
                return res.status(axios_1.HttpStatusCode.Ok).json({
                    message: "Payment initialized successfully",
                    data,
                });
            }
            catch (error) {
                return error.message;
            }
        });
        this.verifyPayment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const reference = req.params.reference;
                if (!reference) {
                    throw new Error('Missing transaction reference');
                }
                const data = yield PaystackApi_1.default.verifyPayment(reference);
                const body = {
                    subscription_id: Number(data.data.id),
                    amount: Number(data.data.metadata.amount),
                    reference: String(data.data.reference),
                    name: String(data.data.metadata.name),
                    email: String(data.data.metadata.email),
                    phone: String(data.data.metadata.phone),
                    subscription_status: ""
                };
                subscription.addSubscription(body)
                    .then((response) => {
                    return res.status(201).json(response);
                })
                    .catch((err) => {
                    return res.json(err.message);
                });
            }
            catch (error) {
                return error.message;
            }
        });
        // console.log(req.body, 'query parameter')
    }
}
const paystackController = new PaystackController();
exports.default = paystackController;
