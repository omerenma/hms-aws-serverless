import {client, client_dev} from '../database/database'
import { Enquiry } from '../interface/Enquiry';

export class EnquiryModel {
    async addEnquiry(data:Enquiry): Promise<[]> {
        try {
                const db_connection = await client_dev.connect()
                const sql = 'INSERT INTO enquiry (name, email, message) VALUES ($1, $2, $3) RETURNING * ';
                const result =  await db_connection.query(sql, [ data.name, data.email, data.message ])
                const response =  result
                 return response.rows[0]
            
        } catch (error:any) {
            throw new Error(error)
        }
    }

}