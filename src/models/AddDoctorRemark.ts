import {client, client_dev} from '../database/database'
import { Enquiry } from '../interface/Enquiry';

export class DoctorRemarkModel {
    async addEnquiry(data:Enquiry): Promise<[]> {
        try {
                const db_connection = await client_dev.connect()
                const sql = 'INSERT INTO doctorremarks (doctor_id,name, email, phone_no, message) VALUES ($1, $2, $3, $4, $5) RETURNING * ';
                const result =  await db_connection.query(sql, [data.doctor_id, data.name, data.email, data.phone_no, data.message ])
                const response =  result
                 return response.rows[0]
            
        } catch (error:any) {
            throw new Error(error)
        }
    }

}