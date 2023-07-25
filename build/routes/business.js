"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Businesses_1 = require("../controller/Businesses");
const router = (0, express_1.Router)();
router.post("/add", Businesses_1.addBussiness);
exports.default = router;
