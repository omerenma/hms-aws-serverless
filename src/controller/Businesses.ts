import { Request, Response } from "express";
import { bussinessSchema } from "../helpers/bussinessValidation";
import { BusinessModel } from "../models/Businesses";
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/emailVerification");
const nodemailer = require('nodemailer')
import dotenv from 'dotenv'
dotenv.config()

const bussiness = new BusinessModel();


const transporter = nodemailer.createTransport({
  // host:process.env.HOST,
  service: "GMAIL",
  port:587,
  secure:true,
  auth:{
      user:process.env.EMAIL_SMTP_USER,
      pass:process.env.EMAIL_VERIFY_SECRET
  }
})



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
      role: "admin",
      password,
    };
    const result: any = await bussiness.addBusiness(data);
    const emailToken = jwt.sign({ userId: await result.id}, process.env.EMAIL_VERIFY_SECRET ,{ expiresIn: "1d" });


    const url = `http://localhost:5000/business/verify/${emailToken}`;


    transporter.sendMail({
      to:result.email,
      subject:"Email confirmation",
      html: `Please click the link to confirm your email: <a href="${url}>${url}</a>"`
    })
      res .status(201).json({ message: "New Businnes registered successfully", data: result });
  } catch (error: any) {
    return res.json({ message: error.message });
  }
};

export const verifyBussiness = async (req: Request, res: Response) => {
  try {
    const user_data = jwt.verify(req.params.token, process.env.EMAIL_VERIFY_SECRET)

    const id = user_data.userId
   const verify =  await bussiness.verifyBusiness(id)
   console.log(verify, 'verified email')
   res.send(verify)

  } catch (error) {
    return error
  }
  
  
};