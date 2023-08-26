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
exports.verifyBussiness = exports.addBussiness = void 0;
const bussinessValidation_1 = require("../helpers/bussinessValidation");
const Businesses_1 = require("../models/Businesses");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/emailVerification");
const nodemailer = require('nodemailer');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bussiness = new Businesses_1.BusinessModel();
const transporter = nodemailer.createTransport({
    // host:process.env.HOST,
    service: "GMAIL",
    port: 587,
    secure: true,
    auth: {
        user: process.env.EMAIL_SMTP_USER,
        pass: process.env.EMAIL_VERIFY_SECRET
    }
});
const addBussiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = bussinessValidation_1.bussinessSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const { name, email, phone, address, password } = req.body;
        const data = {
            name,
            email,
            phone,
            address,
            role: "admin",
            password,
        };
        const result = yield bussiness.addBusiness(data);
        const emailToken = jwt.sign({ userId: yield result.id }, process.env.EMAIL_VERIFY_SECRET, { expiresIn: "1d" });
        const url = `http://localhost:5000/business/verify/${emailToken}`;
        transporter.sendMail({
            to: result.email,
            subject: "Email confirmation",
            html: `Please click the link to confirm your email: <a href="${url}>${url}</a>"`
        });
        res.status(201).json({ message: "New Businnes registered successfully", data: result });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
});
exports.addBussiness = addBussiness;
const verifyBussiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_data = jwt.verify(req.params.token, process.env.EMAIL_VERIFY_SECRET);
        const id = user_data.userId;
        const verify = yield bussiness.verifyBusiness(id);
        console.log(verify, 'verified email');
        res.send(verify);
    }
    catch (error) {
        return error;
    }
});
exports.verifyBussiness = verifyBussiness;
