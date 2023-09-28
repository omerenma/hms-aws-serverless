import { Request, Response } from "express"
import { redactLogData } from "./redactLogData"


export const formatLoggerResponse = (req:Request, res:Response, responseBody:any) => {
    return {
        request:{
            headers: req.headers,
            host: req.headers.host,
            baseUrl: req.baseUrl,
            method: req.method,
            body: redactLogData(req.body),
            params:req?.params,
            query: req?.query,
            // clientIp: req?.header[HTTPHeaders.Forwarded] ?? req?.socket.remoteAddress
    
        },
    
        response: {
            headers: res.getHeaders(),
            statusCode:res.statusCode,
            body: redactLogData(responseBody),
            cookie:redactLogData(res.cookie)
        }

    }
    
}