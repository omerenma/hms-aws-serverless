"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseInterceptor = void 0;
const logger_1 = require("./logger");
const FormatLoggerResponse_1 = require("./FormatLoggerResponse");
const responseInterceptor = (req, res, next) => {
    // save the original response method
    const originalSend = res.send;
    let responseSent = false;
    // Override the response method
    res.send = function (body) {
        if (!responseSent) {
            if (res.statusCode < 400) {
                logger_1.logger.info('Some Success message', (0, FormatLoggerResponse_1.formatLoggerResponse)(req, res, body));
            }
            else {
                logger_1.logger.error(body.message, (0, FormatLoggerResponse_1.formatLoggerResponse)(req, res, body));
            }
            responseSent = true;
        }
        // Call the original response method
        return originalSend.call(this, body);
    };
    // Continue processing the request
    next();
};
exports.responseInterceptor = responseInterceptor;
