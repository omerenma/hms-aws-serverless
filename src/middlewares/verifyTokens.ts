const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
import {Request, Response, NextFunction} from 'express'
import { Data } from '../interface/Data'

dotenv.config()

interface Extended extends Request {
    info?: Data
}

export const verifyToken = (req: Extended, res: Response, next: NextFunction) => {
    try {
        // Get token from headers
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        
        if(!token){
            return res.status(401).json({message: 'You are not authorized'})
        }
        const verify = jwt.verify(token, process.env.TOKEN_SECRET as string) as Data
        if(verify){
            next()
            return verify
        }
    } catch (error:any) {
        return res.status(500).json({message: error.message })
    }
}