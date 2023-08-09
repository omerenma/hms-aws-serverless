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
exports.createEnquiry = void 0;
const enquiryValidation_1 = require("../helpers/enquiryValidation");
const AddEnquiry_1 = require("../models/AddEnquiry");
const createEnquiry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const enquiry = new AddEnquiry_1.EnquiryModel();
    try {
        const { name, email, message, } = req.body;
        const { error, value } = enquiryValidation_1.enquirySchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const data = { name, email, message };
        const query = yield enquiry.addEnquiry(data);
        return res.status(201).json({ message: `Message successfully sent` });
    }
    catch (error) {
        console.log('Appointment Error', error);
        return res.status(500).json({ message: "Something went wrong...", error });
    }
});
exports.createEnquiry = createEnquiry;
