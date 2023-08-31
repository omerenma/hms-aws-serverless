"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_utils_1 = require("../utils/jwt.utils");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function deserializeUser(req, res, next) {
    const { accessToken, refreshToken } = req.cookies;
    if (!accessToken) {
        return next();
    }
    const { payload, expired } = (0, jwt_utils_1.verifyJWT)(accessToken, process.env.TOKEN_SECRET);
    // For a valid access token
    if (payload) {
        // @ts-ignore
        req.user = payload;
        return next();
    }
    // expired access token but with valid refresh token
    const { payload: refresh } = expired && refreshToken ? (0, jwt_utils_1.verifyJWT)(refreshToken, process.env.TOKEN_SECRET) : { payload: null };
    if (!refresh) {
        return next();
    }
    // @ts-ignore
    // const session = getSession(refresh.sessionId)
    const session = req.session.userId;
    if (!session) {
        return next();
    }
    const newAccessToken = (0, jwt_utils_1.signJWT)(session, '10s');
    res.cookie('accessToken', newAccessToken, {
        maxAge: 300000,
        httpOnly: true
    });
    // @ts-ignore
    req.user = (0, jwt_utils_1.verifyJWT)(newAccessToken).payload;
    return next();
}
exports.default = deserializeUser;
