import { Request, Response } from "express";
import { ResetPasswordModel } from "../models/ResetPassword";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const user = new ResetPasswordModel();

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const password = req.body.password
    const id = req.body.id
    const hash =   bcrypt.hashSync(password, 10);
   const result = await user.resetPassword(id)

   let token = result && result.token
   let email = ''

     const verifyToken:any = jwt.decode(token)
     email = verifyToken.payload.email


   
    const update = await user.updatePassword(hash, email)
    res.json(update)
   
 
  } catch (error: any) {
    return res.json({ message: error });
  }
};