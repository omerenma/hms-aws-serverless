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
const addBiz = new Businesses_1.BusinessModel();
// Add new user
const addBussiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = bussinessValidation_1.bussinessSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const { name, email, role, phone, address, password } = req.body;
        const data = { name, email, phone, role, address, password };
        const query = yield bussiness.addBusiness(data);
        return res
            .status(201)
            .json({ message: "New Businnes registered successfully", query });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
});
exports.addBussiness = addBussiness;
// Signin user
// export const signin = async (req: Request, res: Response) => {
//   try {
//     const { error, value } = loginSchema.validate(req.body);
//     if (error) {
//       return res.status(400).json({ message: error.details[0].message });
//     }
//     const { email, password } = req.body;
//     const result = await user.login(email, password);
//     if (result) {
//       let payload = jwt.sign(
//         { payload: result },
//         process.env.TOKEN_SECRET as string,
//         { expiresIn: "10 minutes" }
//       );
//       return res.status(200).json({
//         message: "Login successful",
//         token: payload,
//         name: result && result.name,
//         email: result && result.email,
//         role: result && result.role,
//         id:result && result.id
//       });
//     } else {
//       return res.status(400).json({ message: "Invalid login credentials" });
//     }
//   } catch (error) {
//     return res.json({message:error});
//   }
// };
// // Get all users
// export const getUsers = async (req: Request, res: Response) => {
//   try {
//     const result = await user.getUsers();
//     return res.json(result);
//   } catch (error) {
//     return res.status(500).json({ message: "Failed to fetch records" });
//   }
// };
// // Get a single user
// export const getUserById = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const result = await user.getUserById(parseInt(id));
//     return res.json(result);
//   } catch (error: any) {
//     return res.status(500).json({ message: "Failed to fetch records" });
//   }
// };
// // Delete user
// export const deleteUser = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const result = await user.deleteUser(parseInt(id));
//     return res.status(200).json({
//       message: `User has been deleted successfully`,
//       data: result,
//     });
//   } catch (error: any) {
//     return res.status(400).json({ message: "Something went wrong" });
//   }
// };
// // Edit user
// export const editUser = async (req: Request, res: Response) => {
//   try {
//     const { id, name, email, role } = req.body;
//     const result = await user.editUser(id, name, email, role);
//     if (result) {
//      return res.status(200).json(result);
//     } else {
//      return res
//       .status(404)
//       .json({ message: "No user found for the operation" });
//     }
//   } catch (error) {
//     return res.status(500).json({ message: "Something went wrong" });
//   }
// };
// // Get all Doctors
// export const getDoctors = async (req: Request, res: Response) => {
//   try {
//     const result = await user.getDoctors();
//     return  res.status(200).json(result);
//   } catch (error) {
//     return res.status(500).json({ message: "Failed to fetch records" });
//   }
// };
