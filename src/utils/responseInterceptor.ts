import {Request, Response, NextFunction} from 'express'
import { logger } from './logger'
import { formatLoggerResponse } from './FormatLoggerResponse'

export const responseInterceptor = (req:Request, res:Response, next:NextFunction) => {
    // save the original response method
    const originalSend = res.send

    let responseSent = false
    // Override the response method

    res.send = function(body:any): Response{
        if(!responseSent) {
            if(res.statusCode < 400) {
                logger.info(
                    'Some Success message', formatLoggerResponse(req, res, body)
                )
            }else {
                logger.error(
                    body.message,
                    formatLoggerResponse(req, res, body)
                )
            }
            responseSent = true
        }
        // Call the original response method
        return originalSend.call(this, body)
    }
    // Continue processing the request
    next()
}