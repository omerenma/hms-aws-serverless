"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PasswordReset_1 = require("../controller/PasswordReset");
const router = (0, express_1.Router)();
router.put('/', PasswordReset_1.resetPassword);
exports.default = router;
