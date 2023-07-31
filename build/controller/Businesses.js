"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBussiness = void 0;
const bussinessValidation_1 = require("../helpers/bussinessValidation");
const Businesses_1 = require("../models/Businesses");
const jwt = require("jsonwebtoken");
const bussiness = new Businesses_1.BusinessModel();
const addBussiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = bussinessValidation_1.bussinessSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const { name, email, phone, address, password } = req.body;
        const data = {
            name,
            email,
            phone,
            address,
            role: "admin",
            password
        };
        const result = yield bussiness.addBusiness(data);
        return res.status(201).json({ message: "New Businnes registered successfully", data: result });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
});
exports.addBussiness = addBussiness;
