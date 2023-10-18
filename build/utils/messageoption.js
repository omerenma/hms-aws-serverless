"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageoptions = void 0;
const messageoptions = (from, to, subject, html) => {
    return {
        from: process.env.EMAIL_SMTP_USER,
        to: to,
        subject: subject,
        html: html
    };
};
exports.messageoptions = messageoptions;
