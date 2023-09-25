"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Comprehend_1 = require("../controller/Comprehend");
const router = (0, express_1.Router)();
router.get('/', Comprehend_1.comprehend);
exports.default = router;
