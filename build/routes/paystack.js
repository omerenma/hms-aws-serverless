"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import {inializeTransaction, paystack_payment} from '../api/PaystackApi'
const PaystackController_1 = __importDefault(require("../controller/PaystackController"));
const router = express_1.default.Router();
router.get('/verify/:reference', PaystackController_1.default.verifyPayment);
router.post('/initialize', PaystackController_1.default.initializePayment);
exports.default = router;
