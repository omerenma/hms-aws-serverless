"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ForgorPassword_1 = require("../controller/ForgorPassword");
const router = (0, express_1.Router)();
router.post('/', ForgorPassword_1.forgotPassword);
exports.default = router;
