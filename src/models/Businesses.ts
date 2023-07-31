import {client, client_dev} from '../database/database'
import { Businneses } from '../interface/Bussiness';
const bcrypt = require('bcryptjs')


export class BusinessModel {
    async addBusiness(data:Businneses): Promise<[]> {
        try {
                const db_connection = await client.connect()
                const queryId = 'select * from business where email = ($1)'
                const query_result = await db_connection.query(queryId,[data.email])
                
                if(query_result.rows.length > 0){
                    throw new Error('Business already exists')
                }
                const hash =   bcrypt.hashSync(data.password, 10);
                    const sql = 'INSERT INTO business (name, email, phone,role, address, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ';
                    const result =  await db_connection.query(sql, [  data.name,  data.email, data.phone, data.role, data.address, hash])
                    const response =  result
                    
                     return response.rows[0]
            
        } catch (error:any) {
            throw new Error(error)
        }
    }

    // async getAppointment ():Promise<Appointment[]> {
    //     try {
    //         const db_connection = await client_dev.connect()
    //         // const sql = "select * from appointments join patients on patients.id::varchar = appointments.patients_id join doctors on doctors.id_doctor::varchar=appointments.doctor_id";
    //         const sql = "select * from appointments join patients on patients.id::varchar = appointments.patients_id join doctors on doctors.id_doctor::varchar=appointments.doctor_id join users on users.id = doctors.id_doctor"
    //         const result = await db_connection.query(sql)
    //         const response = result
    //         return response.rows
            
    //     } catch (error:any) {
    //         return error
    //     }
    // }


    // async getAppointmentByDoctorId(id:string):Promise<{}> {
    //     try {
    //         const db_connection = await client_dev.connect()
    //         const sql = "select * from appointments join doctors on doctors.id_doctor::varchar = appointments.doctor_id join patients on patients.id::varchar = appointments.patients_id WHERE id_doctor = ($1)";
    //         const result = await db_connection.query(sql, [id])
    //         return result.rows


    //     } catch (error:any) {
    //         return error.message
            
    //     }

    // }

}