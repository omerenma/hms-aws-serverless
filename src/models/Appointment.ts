import {client} from '../database/database'
import { Appointment } from '../interface/Appointment';

export class AppointmentModel {
    async addAppointment(user:Appointment): Promise<[]> {
        try {
                const db_connection = await client.connect()
                const sql = 'INSERT INTO appointments (patient_id, doctor_id, appointment_date) VALUES ($1, $2, $3) RETURNING * ';
                const result =  await db_connection.query(sql, [ user.patient_id, user.doctor_id, user.appointment_date])
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