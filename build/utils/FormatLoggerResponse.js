"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLoggerResponse = void 0;
const formatLoggerResponse = (req, res, responseBody) => {
    return {
        request: {
            headers: req.headers,
            host: req.headers.host,
            baseUrl: req.baseUrl,
            method: req.method,
            body: req.body,
            params: req === null || req === void 0 ? void 0 : req.params,
            query: req === null || req === void 0 ? void 0 : req.query,
            // clientIp: req?.header[HTTPHeaders.Forwarded] ?? req?.socket.remoteAddress
        },
        response: {
            headers: res.getHeaders(),
            statusCode: res.statusCode,
            body: responseBody
        }
    };
};
exports.formatLoggerResponse = formatLoggerResponse;
