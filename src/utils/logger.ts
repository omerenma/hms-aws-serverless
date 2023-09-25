import winston from 'winston';
import {randomBytes} from 'crypto'
const appVersion = process.env.npm_package_version
const {combine, timestamp, json, printf}  = winston.format
const timestampFormat = 'MM-DD-YYYY HH:mm:ss'
const generateLogId = (): string => randomBytes(16).toString('hex')

interface WinstonProps {
    timestamp:any;
    level:string;
    message:any
    data:any

}
export const logger = winston.createLogger({
    format:combine(
        timestamp({format: timestampFormat}),
        json(),
        printf(({timestamp, level,message, ...data}) => {
            const response = {
                level,
                logId:generateLogId(),
                timestamp,
                appInfo: {
                    appVersion,
                    environment:process.env.NODE_ENV,
                    processId: process.pid
                },
                message,
                data
            }
            return JSON.stringify(response)
        })
    ),
    transports: [
        new winston.transports.Console()
    ]
    
})

if(process.env.NODE_ENV !== 'production'){
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }))
}
