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
exports.forgotPassword = void 0;
const ForgotPassword_1 = require("../models/ForgotPassword");
const Token_1 = require("../models/Token");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const EmailService_1 = __importDefault(require("../notifications/EmailService"));
const user = new ForgotPassword_1.ForgotPasswordModel();
const tokens = new Token_1.TokensModel;
// Add new user
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const data = { email };
        const query = yield user.forgotPassword(data.email);
        // create a temporary token
        const token = jsonwebtoken_1.default.sign({ payload: query }, 'jdnsdusd98823rj02', { expiresIn: '1 hour' });
        yield tokens.addToken(token);
        // Save the token in the db
        let messageoptiosn = {
            from: process.env.EMAIL_SMTP_USER,
            to: email,
            subject: `Password reset`,
            html: `
        <html>
        <head>
        <title>Password verification</title>
        <body>
        <h1>Password reset</h1>
        <h2>Please click on the link below to proceed</h2>
        <a href="http://localhost:3000/passwordchange/${token}">Click</a>
        </body>
        </head>
        </html>
         `
        };
        try {
            yield (0, EmailService_1.default)(messageoptiosn);
        }
        catch (error) {
            throw new Error(error);
        }
        res.json(token);
    }
    catch (error) {
        return res.json({ message: error });
    }
});
exports.forgotPassword = forgotPassword;
