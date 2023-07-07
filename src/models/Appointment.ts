import {client, client_dev} from '../database/database'
import { Appointment } from '../interface/Appointment';

export class AppointmentModel {
    async addAppointment(user:Appointment): Promise<[]> {
        try {
                const db_connection = await client_dev.connect()
                const sql = 'INSERT INTO appointments (patients_id, doctor_id, appointment_date) VALUES ($1, $2, $3) RETURNING * ';
                const result =  await db_connection.query(sql, [ user.patients_id, user.doctor_id, user.appointment_date ])
                const response =  result
                 return response.rows[0]
            
        } catch (error:any) {
            throw new Error(error)
        }
    }

    async getAppointment ():Promise<Appointment[]> {
        try {
            const db_connection = await client_dev.connect()
            const sql = "select * from appointments join patients on patients.id::varchar = appointments.patients_id join doctors on doctors.id_doctor::varchar=appointments.doctor_id";
            const result = await db_connection.query(sql)
            const response = result
            return response.rows
            
        } catch (error:any) {
            return error
        }
    }


    async getAppointmentByDoctorId(id:string):Promise<{}> {
        try {
            const db_connection = await client_dev.connect()
            const sql = "SELECT * FROM appointments JOIN doctors ON id_doctor = doctor_id WHERE id_doctor = ($1)";
            const result = await db_connection.query(sql, [id])
            return result.rows


        } catch (error:any) {
            return error.message
            
        }

    }

}