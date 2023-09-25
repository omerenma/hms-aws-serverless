"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Admission_1 = require("../controller/Admission");
const verifyTokens_1 = require("../middlewares/verifyTokens");
const router = (0, express_1.Router)();
router.post('/add', verifyTokens_1.verifyToken, Admission_1.createAdmission);
router.get('/get', verifyTokens_1.verifyToken, Admission_1.getAdmission);
exports.default = router;
