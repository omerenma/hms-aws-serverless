"use strict";
// import { Request, Response } from "express";
// import { registerSchema, loginSchema } from "../helpers/userValidation";
// import { SubscriptionModel } from "../models/Subscription";
// const subscription = new SubscriptionModel();
// export const subscribe = async (req: Request, res: Response) => {
//   try {
//     const { name, email, role, password } = req.body;
//     const data = { name, email, role, password };
//     const response = await subscription.startPayment(data);
//     res.status(201).json({status: "Success", data:response})
//   } catch (error:any) {
//     return res.json({message:error.message});
//   }
// };
// export const createPayment = async (req: Request, res: Response) => {
//     try {
//         const response =  await subscription.createPayment(req.body)
//         res.status(201).json({status:"Success", data: response})
//     } catch (error:any) {
//         res.status(500).json({status:"Failed", message:error.message})
//     }
// }
// export const getPayment = async (req:Request, res:Response) => {
//     try {
//         const response = await subscription.paymentReciept(req.body)
//         res.status(201).json({status:"Success", data: response})
//     } catch (error:any) {
//         res.status(500).json({status: "Failed", message: error.message})
//     }
// }
