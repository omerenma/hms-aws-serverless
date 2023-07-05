import {client} from '../database/database'
import { Appointment } from '../interface/Appointment';

export class AppointmentModel {
    async addAppointment(user:Appointment): Promise<[]> {
        try {
                const db_connection = await client.connect()
                const sql = 'INSERT INTO appointments (patient_name, patient_email, doctor_email, date) VALUES ($1, $2, $3, $4) RETURNING * ';
                const result =  await db_connection.query(sql, [ user.patient_name, user.doctor_email, user.date, user.patient_email, ])
                const response =  result
                 return response.rows[0]
            
        } catch (error:any) {
            throw new Error(error)
        }
    }

    async getAppointment ():Promise<Appointment[]> {
        try {
            const db_connection = await client.connect()
            const sql = "SELECT * FROM appointments";
            const result = await db_connection.query(sql)
            const response = result
            return response.rows
            
        } catch (error:any) {
            return error
        }
    }

}