import {client} from '../database/database'
import { Users, Verify, Login, LoginData } from '../utils/types'
interface Doctors{
    name:string;
    email:string;
    sex:string;
    phone_no:string;
    dob:string;
    specialty:string;
}

export class DoctorModel {
    async addDoctor(data:Doctors): Promise<{message:string}> 
    {
        try {
            const db_connection = await client.connect()
            // Query Users table
            const user_email = `select * from users where email = ($1)`
           const users =  await db_connection.query(user_email,[data.email])
           const doctor_data =  users.rows
            
            const checkEmail = `SELECT email FROM doctors WHERE email=($1)`
            const query_email = await db_connection.query(checkEmail, [data.email])
            if( query_email.rows.length > 0){
                
                throw new Error(`Doctor with email: ${data.email},  already exist.`)
            }else{
                const sql = 'INSERT INTO doctors (id_doctor, name, email, sex, phone_no, dob, specialty) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * ';
                doctor_data.map(item =>{
                    const datas = {
                        id_doctor:item.id as string,
                        name:item.name as string,
                        email:item.email as string,
                        sex:data.sex,
                        dob:data.dob,
                        phone_no:data.phone_no,
                        specialty:data.specialty
                    }
                    const result =  db_connection.query(sql, [datas.id_doctor, datas.name, datas.email, datas.sex, datas.phone_no, datas.dob, datas.specialty])
                    const response =  result
                    return response

                })
                return doctor_data[0]
            }
        } catch (error:any) {
            return error.message
        }
      
    }
 

    // Get all users
    async getdoctors (): Promise <Doctors[]> {
        try {
         const db_connection = client.connect()
         const sql = `SELECT * FROM doctors`
         const query = await (await db_connection).query(sql)
         return query.rows
        } catch (error:any) {
         return error
        }
    }

     // Get single Doctor
     async getUserById (id:number): Promise <Users[]> {
        try {
         const db_connection = client.connect()
         const sql = `SELECT * FROM doctors WHERE id = ($1)`
         const query = await (await db_connection).query(sql, [id])
         return query.rows
        } catch (error:any) {
           
         return error.message
        }
    }

    // Delete Doctor

    async deleteDoctor (id:string): Promise<Doctors> {
        try {
            const db_connection = client.connect()
            const query_id = `DELETE  FROM doctors WHERE id =($1)`
            const sql = await (await db_connection).query(query_id, [id])
            return sql.rows[0]
        } catch (error:any) {
            return error
        }
    }

     // UPDATE user

   
     async editDoctor (id:string, name?:string, email?:string, sex?:string, dob?:string, phone_no?:string, specialty?:string ): Promise<[]> {
        try {
            const db_connection = await client.connect()
            const query = `UPDATE doctors SET name = $1, email = $2, sex = $3, dob = $4, phone_no = $5, specialty = $6 WHERE id = ${id}`
            const result = await db_connection.query(query, [name, email, sex, dob, phone_no, specialty])
            if(result.rowCount !== 0){
                return result.rows[0]
            }
            return result.rows[0]
        } catch (error:any) {
            return error
        }
    }


}