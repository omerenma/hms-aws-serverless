import { Request, Response } from "express";
import { ResetPasswordModel } from "../models/ResetPassword";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const user = new ResetPasswordModel();

// Add new user
export const resetPassword = async (req: Request, res: Response) => {
  try {
    const password = req.body.password
    const hash =   bcrypt.hashSync(password, 10);
   const result = await user.resetPassword(req.body.id)

   let token
   let email = ''
   for (const iterator of result) {
    token = iterator.token
   }
     const verifyToken:any = jwt.decode(token)
     email = verifyToken.payload.email


   if(token && email){
    const update = await user.updatePassword(hash, email)
    res.json(update)
   }
 
  } catch (error: any) {
    return res.json({ message: error });
  }
};