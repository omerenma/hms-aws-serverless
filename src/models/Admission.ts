import {client, client_dev} from '../database/database'
import { Admission, GetAdmission } from '../interface/Admission';

export class AdmissionModel {
    async createAdmission(data:Admission): Promise<[]> {
        try {
                const db_connection = await client_dev.connect()
                const sql = 'INSERT INTO admissions (patients_id , admission_date, admission_room_number, ailment, business_id ) VALUES ($1, $2, $3, $4, $5) RETURNING * ';
                const result = await  db_connection.query(sql, [  data.patients_id, data.admission_date, data.admission_room_number, data.ailment, data.business_id])
                const response =  result
                 return response.rows[0]
            
        } catch (error:any) {
            throw new Error(error)
        }

    }

    async getAdmission ():Promise<GetAdmission[]> {
        try {
            const db_connection = await client_dev.connect()
            const sql = "select * from admissions join patients on patients.id = admissions.patients_id";
            const result = await db_connection.query(sql)
            const response = result
            return response.rows
            
        } catch (error:any) {
            return error
        }
    }

}



