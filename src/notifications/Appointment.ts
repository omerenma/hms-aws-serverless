import {client_dev, client} from '../database/database'
import dotenv from "dotenv";




dotenv.config();

interface Appointment {
    id?:string,
    patient_name:string,
    doctor_email:string,
    date:string,
    patient_email:string,
    issent?:number
}

const AppointmentEmail =async () => {
    const sql = ` select * from appointments where issent = 0`
    const query = await client_dev.query(sql)
    const appointments: Appointment[] = await query.rows;
    for (let appointment of appointments) {
        
    }
    
}