"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BookAppointments_1 = require("../controller/BookAppointments");
const router = (0, express_1.Router)();
router.post('/book', BookAppointments_1.createAppointment);
router.get('/getappointments', BookAppointments_1.getAppointments);
router.get('/getappointments/:id', BookAppointments_1.getAppointmentByDoctorId);
exports.default = router;
