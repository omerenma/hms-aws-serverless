import { Request, Response } from "express";
import { bussinessSchema } from "../helpers/bussinessValidation";
import { BusinessModel } from "../models/Businesses";
const  jwt  = require("jsonwebtoken");

const bussiness = new BusinessModel()

export const addBussiness = async (req: Request, res: Response) => {
  try {
    const { error, value } = bussinessSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { name, email, phone, address, password } = req.body;
    const data = {
      name,
       email, 
        phone, 
        address, 
        role:"admin",
        password 
      };
    const result = await bussiness.addBusiness(data);
    return res.status(201).json({ message: "New Businnes registered successfully", data:result });
  } catch (error:any) {
    return res.json({message:error.message});
  }
};

