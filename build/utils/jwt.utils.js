"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = exports.signJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// sign jwt
function signJWT(result, expiresIn) {
    return jsonwebtoken_1.default.sign(result, process.env.TOKEN_SECRET, { expiresIn });
}
exports.signJWT = signJWT;
// verify jwt
function verifyJWT(token, secret) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        return { payload: decoded, expired: false };
    }
    catch (error) {
        return { payload: null, expired: error.message.include('jwt expired') };
    }
}
exports.verifyJWT = verifyJWT;
