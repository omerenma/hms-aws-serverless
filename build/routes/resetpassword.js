"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ResetPassword_1 = require("../controller/ResetPassword");
const router = (0, express_1.Router)();
router.put('/', ResetPassword_1.resetPassword);
exports.default = router;
