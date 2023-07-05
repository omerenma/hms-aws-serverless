"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Admission_1 = require("../controller/Admission");
const router = (0, express_1.Router)();
router.post('/add', Admission_1.createAdmission);
router.get('/get', Admission_1.getAdmission);
exports.default = router;
