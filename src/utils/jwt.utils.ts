import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

// sign jwt
export function signJWT(result:object, expiresIn:string) {
    return jwt.sign(result, process.env.TOKEN_SECRET as string, {expiresIn} )
}

// verify jwt

export function verifyJWT(token:string, secret:string) {
    try {
        const decoded = jwt.verify(token, secret)
        return {payload:decoded, expired:false}
    } catch (error:any) {
        return {payload:null, expired: error.message.include('jwt expired')}
    }

}