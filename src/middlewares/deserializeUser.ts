import { NextFunction, Response } from "express";
import { Request } from "express";
import { signJWT, verifyJWT } from "../utils/jwt.utils";
import dotenv from 'dotenv'
import { getSession } from "../controller/Users";
dotenv.config()
function deserializeUser(req:Request, res:Response, next:NextFunction){
    const {accessToken, refreshToken} = req.cookies

    if(!accessToken){
        return next()
    }

    const {payload, expired} = verifyJWT(accessToken, process.env.TOKEN_SECRET as string)
    // For a valid access token
    if(payload){
        // @ts-ignore
        req.user = payload
        return next()
    }

    // expired access token but with valid refresh token
    const {payload: refresh} = expired  && refreshToken ? verifyJWT(refreshToken, process.env.TOKEN_SECRET as string) : {payload: null}
    if(!refresh){
        return next()
    }
    // @ts-ignore
    const session = getSession(refresh.sessionId)
    if(!session){
        return next()
    }  
    const newAccessToken = signJWT(session, '5s')
    res.cookie('accessToken', newAccessToken, {
        maxAge:300000,
        httpOnly:true
    })
        // @ts-ignore

    req.user = verifyJWT(newAccessToken).payload
    return next()

}

export default deserializeUser