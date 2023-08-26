import {Request, Response} from 'express'
import AWS from 'aws-sdk'
export const comprehend = async (req:Request, res:Response) => {
    try {
        var params = {
            Text:'malaria'
        }
        const comprehendmedical = new AWS.ComprehendMedical()
        comprehendmedical.detectEntitiesV2(params).promise()
        res.send(comprehendmedical)
        
    } catch (error) {
        console.log('error', error)
    }
}
