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
const nodemailer = require('nodemailer');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sendEmail = (email, subject, html, EMAIL_SMTP_USER) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
        yield transporter.sendMail({
            from: EMAIL_SMTP_USER,
            to: email,
            subject: subject,
            text: html
        });
    }
    catch (error) {
        return error;
    }
});
module.exports = sendEmail;
