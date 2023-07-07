import {client, client_dev} from '../database/database'
import { Appointment } from '../interface/Appointment';

interface AppointmentData {
    patient_id:string;
    doctor_id:string;
    appointment_date:string
}
export class BookAppointmentModel {
    async booAppointment(user:AppointmentData): Promise<[]> {
        try {
                const db_connection = await client_dev.connect()
                const sql = 'INSERT INTO book_appointments (patient_id, doctor_id, appointment_date) VALUES ($1, $2, $3) RETURNING * ';
                const result =  await db_connection.query(sql, [ user.patient_id, user.doctor_id, user.appointment_date ])
                const response =  result
                 return response.rows[0]
            
        } catch (error:any) {
            throw new Error(error)
        }
    }

    async getAppointment ():Promise<Appointment[]> {
        try {
            const db_connection = await client_dev.connect()
            const sql = "SELECT * FROM book_appointments JOIN patients ON patients_id=patient_id JOIN doctors ON id_doctor=doctor_id";
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
            const sql = "SELECT * FROM book_appointments JOIN patients ON patients_id=patient_id JOIN doctors ON id_doctor=doctor_id WHERE id_doctor = ($1)";
            const result = await db_connection.query(sql, [id])
            return result.rows


        } catch (error:any) {
            return error.message
            
        }

    }
}