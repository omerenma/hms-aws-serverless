"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
const verifyToken = (req, res, next) => {
    try {
        // Get token from headers
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'You are not authorized' });
        }
        const verify = jwt.verify(token, process.env.TOKEN_SECRET);
        if (verify) {
            next();
            return verify;
        }
        else {
            return res.status(401).json({ message: "You are not authorised to view this resource, please login" });
        }
    }
    catch (error) {
        return res.status(401).json({ message: error.message });
    }
};
exports.verifyToken = verifyToken;
