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
exports.getDoctors = exports.editUser = exports.deleteUser = exports.getUserById = exports.getUsers = exports.signin = exports.signup = void 0;
const userValidation_1 = require("../helpers/userValidation");
const Users_1 = require("../models/Users");
const jwt = require("jsonwebtoken");
const user = new Users_1.UsersModel();
// Add new user
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = userValidation_1.registerSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const { business_id, name, email, role, password } = req.body;
        const data = { business_id, name, email, role, password };
        const query = yield user.addUser(data);
        return res
            .status(201)
            .json({ message: "New user registered successfully", data: query.name });
    }
    catch (error) {
        return res.json({ message: error });
    }
});
exports.signup = signup;
// Signin user
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = userValidation_1.loginSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const { email, password } = req.body;
        const result = yield user.login(email, password);
        if (result) {
            let payload = jwt.sign({ payload: result }, process.env.TOKEN_SECRET, { expiresIn: "10 minutes" });
            return res.status(200).json({
                message: "Login successful",
                token: payload,
                name: result && result.name,
                email: result && result.email,
                role: result && result.role,
                id: result && result.id,
                business_id: result && result.business_id
            });
        }
        else {
            return res.status(400).json({ message: "Invalid login credentials" });
        }
    }
    catch (error) {
        return res.json({ message: error });
    }
});
exports.signin = signin;
// Get all users
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user.getUsers();
        return res.json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to fetch records" });
    }
});
exports.getUsers = getUsers;
// Get a single user
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield user.getUserById(parseInt(id));
        return res.json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to fetch records" });
    }
});
exports.getUserById = getUserById;
// Delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield user.deleteUser(parseInt(id));
        return res.status(200).json({
            message: `User has been deleted successfully`,
            data: result,
        });
    }
    catch (error) {
        return res.status(400).json({ message: "Something went wrong" });
    }
});
exports.deleteUser = deleteUser;
// Edit user
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, email, role } = req.body;
        const result = yield user.editUser(id, name, email, role);
        if (result) {
            return res.status(200).json(result);
        }
        else {
            return res
                .status(404)
                .json({ message: "No user found for the operation" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.editUser = editUser;
// Get all Doctors
const getDoctors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user.getDoctors();
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to fetch records" });
    }
});
exports.getDoctors = getDoctors;
