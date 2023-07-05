"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Appointment_1 = require("../controller/Appointment");
const router = (0, express_1.Router)();
router.post('/add', Appointment_1.createAppointment);
router.get('/get', Appointment_1.getAppointment);
exports.default = router;
