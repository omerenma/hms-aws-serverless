"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const crypto_1 = require("crypto");
const appVersion = process.env.npm_package_version;
const { combine, timestamp, json, printf } = winston_1.default.format;
const timestampFormat = 'MM-DD-YYYY HH:mm:ss';
const generateLogId = () => (0, crypto_1.randomBytes)(16).toString('hex');
exports.logger = winston_1.default.createLogger({
    format: combine(timestamp({ format: timestampFormat }), json(), printf((_a) => {
        var { timestamp, level, message } = _a, data = __rest(_a, ["timestamp", "level", "message"]);
        const response = {
            level,
            logId: generateLogId(),
            timestamp,
            appInfo: {
                appVersion,
                environment: process.env.NODE_ENV,
                processId: process.pid
            },
            message,
            data
        };
        return JSON.stringify(response);
    })),
    transports: [
        new winston_1.default.transports.Console()
    ],
});
if (process.env.NODE_ENV !== 'production') {
    console.log('production');
    exports.logger.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.simple()
    }));
}
else {
    console.log('development');
}
