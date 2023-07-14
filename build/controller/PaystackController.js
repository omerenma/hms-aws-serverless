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
                return res.status(axios_1.HttpStatusCode.Ok).send({
                    message: "Payment initialized successfully",
                    data,
                });
            }
            catch (error) {
                console.log(error);
            }
        });
        this.verifyPayment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.query, 'query parameter');
            if (!req.query.reference) {
                throw new Error('Missing transaction reference');
            }
            const data = yield PaystackApi_1.default.verifyPayment(req.query.reference);
            console.log('Verify :', data);
            res.status(200).send({
                message: "Subscription verified successfully",
                data
            });
        });
    }
}
const paystackController = new PaystackController();
exports.default = paystackController;
// export const paystack_payment = async (req:Request, res:Response) => {
//     try {
//         const data = req.body
//         axios({
//             url: config.paystack_base_uri as string,
//             method:'POST',
//             data:JSON.stringify(data),
//             headers:{
//                 'Content-Type':"application/json",
//                 Authorization:`Bearer ${config.paystack_secret as string}`
//             }
//         })
//     } catch (error:any) {
//         console.log(error.message)
//     }
// }
// export const inializeTransaction = async (req:Request, res:Response) =>{
//     try {
//         const response = await axios({
//             url:`${config.paystack_base_uri}/initialize`,
//             method:'POST',
//             data:JSON.stringify(req.body),
//             headers:{
//                 'Content-Type':'application/json',
//                 Authorization:`Bearer ${config.paystack_secret as string}`
//             }
//         })
//         console.log('Initialize reponse', response)
//         return response.data
//     } catch (error:any) {
//         console.log(error.message)
//     }
// }
