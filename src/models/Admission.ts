import {client} from '../database/database'
import { Admission, GetAdmission } from '../interface/Admission';

export class AdmissionModel {
    async createAdmission(user:Admission): Promise<[]> {
        try {
                const db_connection = await client.connect()
                const sql = 'INSERT INTO admissions (patients_id , admission_date, discharged_date ) VALUES ($1, $2, $3) RETURNING * ';
                const result = await  db_connection.query(sql, [  user.patients_id, user.admission_date, user.discharged_date])
                const response =  result
                 return response.rows[0]
            
        } catch (error:any) {
            throw new Error(error)
        }

    }

    async getAdmission ():Promise<GetAdmission[]> {
        try {
            const db_connection = await client.connect()
            const sql = "select * from admissions join patients on patients.patients_id = admissions.patients_id";
            const result = await db_connection.query(sql)
            const response = result
            return response.rows
            
        } catch (error:any) {
            return error
        }
    }

}



