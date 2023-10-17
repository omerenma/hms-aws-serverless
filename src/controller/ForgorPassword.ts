import { Request, Response } from "express";
import { ForgotPasswordModel } from "../models/ForgotPassword";
import {TokensModel} from '../models/Token'
import jwt from 'jsonwebtoken'
import { signJWT } from "../utils/jwt.utils";
import sendMail from "../notifications/EmailService";
import ejs from 'ejs'


const user = new ForgotPasswordModel();
const tokens = new TokensModel


// Add new user
export const forgotPassword = async (req: Request, res: Response) => {
  try {
    
    const { email } = req.body;
    const data = {  email};
    const query = await user.forgotPassword(data.email);
   
    // create a temporary token
    const token = jwt.sign({payload:query}, 'jdnsdusd98823rj02', {expiresIn:'1 hour'} )
    await tokens.addToken(token)
    // Save the token in the db
    
     
   
    let messageoptiosn = {
        from : process.env.EMAIL_SMTP_USER,
        to:email,
        subject: `Password reset`,
        html: `
        <html>
        <head>
        <title>Password verification</title>
        <body>
        <h1>Password reset</h1>
        <h2>Please click on the link below to proceed</h2>
        <a href="http://localhost:3000/passwordchange/${token}">Click</a>
        </body>
        </head>
        </html>
        `
        
    }
    try {
        await sendMail(messageoptiosn)
    } catch (error:any) {
        throw new Error(error)
        
    }
     res.json(token)
    
  } catch (error: any) {
    return res.json({ message: error });
  }
};