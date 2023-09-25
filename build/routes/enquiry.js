"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Enquiry_1 = require("../controller/Enquiry");
const router = (0, express_1.Router)();
router.post('/add', Enquiry_1.createEnquiry);
exports.default = router;
