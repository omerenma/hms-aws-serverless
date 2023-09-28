"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLoggerResponse = void 0;
const redactLogData_1 = require("./redactLogData");
const formatLoggerResponse = (req, res, responseBody) => {
    return {
        request: {
            headers: req.headers,
            host: req.headers.host,
            baseUrl: req.baseUrl,
            method: req.method,
            body: (0, redactLogData_1.redactLogData)(req.body),
            params: req === null || req === void 0 ? void 0 : req.params,
            query: req === null || req === void 0 ? void 0 : req.query,
            // clientIp: req?.header[HTTPHeaders.Forwarded] ?? req?.socket.remoteAddress
        },
        response: {
            headers: res.getHeaders(),
            statusCode: res.statusCode,
            body: (0, redactLogData_1.redactLogData)(responseBody),
            cookie: (0, redactLogData_1.redactLogData)(res.cookie)
        }
    };
};
exports.formatLoggerResponse = formatLoggerResponse;
