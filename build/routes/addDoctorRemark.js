"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DoctorRemark_1 = require("../controller/DoctorRemark");
const router = (0, express_1.Router)();
router.post('/add', DoctorRemark_1.createDoctorRemark);
exports.default = router;
