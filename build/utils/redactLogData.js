"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redactLogData = void 0;
const enum_1 = require("./enum");
const sensitiveKeysList = Object.values(enum_1.SensitiveKeys);
const redactLogData = (data) => {
    if (typeof data === 'object' && data !== null && !data.constructor.name.startsWith('model')) {
        if (Array.isArray(data)) {
            return data.map(item => (0, exports.redactLogData)(item));
        }
        const redactedData = {};
        for (const key in data) {
            if (sensitiveKeysList.includes(key)) {
                redactedData[key] = '*******'; // replace e.g password with *
            }
            else {
                // Recursively redact sensitive keys within nexted objects
                redactedData[key] = (0, exports.redactLogData)(data[key]);
            }
        }
        return redactedData;
    }
    else {
        return data;
    }
};
exports.redactLogData = redactLogData;
