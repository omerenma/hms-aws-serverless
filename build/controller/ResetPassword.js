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
exports.resetPassword = void 0;
const ResetPassword_1 = require("../models/ResetPassword");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user = new ResetPassword_1.ResetPasswordModel();
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const password = req.body.password;
        const id = req.body.id;
        const hash = bcryptjs_1.default.hashSync(password, 10);
        const result = yield user.resetPassword(id);
        let token = result && result.token;
        let email = '';
        const verifyToken = jsonwebtoken_1.default.decode(token);
        email = verifyToken.payload.email;
        const update = yield user.updatePassword(hash, email);
        res.json(update);
    }
    catch (error) {
        return res.json({ message: error });
    }
});
exports.resetPassword = resetPassword;
