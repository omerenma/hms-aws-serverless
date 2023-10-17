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
exports.resetPassword = void 0;
const PasswordReset_1 = require("../models/PasswordReset");
const user = new PasswordReset_1.PasswordResetModel();
// Add new user
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const data = { email };
        const result = yield user.resetPassword(data);
        if (!result) {
            return res.status(404).json({ message: 'No user found with the email: ', email });
        }
    }
    catch (error) {
        console.log(error.message);
        return res.json({ message: error });
    }
});
exports.resetPassword = resetPassword;
