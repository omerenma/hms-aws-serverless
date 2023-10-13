import {client, client_dev} from '../database/database'
import { Appointment } from '../interface/Appointment';

export class AppointmentModel {
    async addAppointment(user:Appointment): Promise<[]> {
        try {
                const db_connection = await client_dev.connect()
                const sql = 'INSERT INTO appointments (patient_id, doctor_id, appointment_date, business_id) VALUES ($1, $2, $3, $4) RETURNING * ';
                const result =  await db_connection.query(sql, [ user.patient_id, JSON.parse(user.doctor_id), user.appointment_date, user.business_id ])
                const response =  result
                 return response.rows[0]
            
        } catch (error:any) {
            throw new Error(error)
        }
    }

    async getAppointment ():Promise<Appointment[]> {
        try {
            const db_connection = await client_dev.connect()
            // const sql = "select * from appointments join patients on patients.id::varchar = appointments.patients_id join doctors on doctors.id_doctor::varchar=appointments.doctor_id";
            const sql = "select * from appointments join patients on patients.id::varchar = appointments.patient_id join doctors on doctors.id::varchar=appointments.doctor_id join users on users.id  = doctors.id"
            const result = await db_connection.query(sql)
            const response = result
            return response.rows
            
        } catch (error:any) {
            return error
        }
    }


    async getAppointmentByDoctorId(id:any):Promise<{}> {
        try {
            const db_connection = await client_dev.connect()
            const sql = "select * from appointments join doctors on doctors.id::varchar = appointments.doctor_id::varchar join patients on patients.id::varchar = appointments.patient_id::varchar WHERE doctors.id = ($1)";
            const result = await db_connection.query(sql, [id])
            return result.rows


        } catch (error:any) {
            return error.message
            
        }

    }

}