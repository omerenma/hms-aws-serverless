import {client, client_dev} from '../database/database'
import { Users, Verify, Login, LoginData } from '../utils/types'
const bcrypt = require('bcryptjs')
interface User{
    id:string;
    name:string;
    email:string;
    role:string
}



export class UsersModel {
    async addUser(user:Users): Promise<Users> {
        try {
            const db_connection = await client.connect()
            const checkEmail = `SELECT email FROM users WHERE email=($1)`
            const query_email = await db_connection.query(checkEmail, [user.email])
            if( query_email.rows.length > 0){
                throw new Error(`User with email: ${user.email},  already exist.`)
            }else{
                const hash =   bcrypt.hashSync(user.password, 10);
                const sql = 'INSERT INTO users (name, email, role, password) VALUES ($1, $2, $3, $4) RETURNING * ';
                const result = await db_connection.query(sql, [user.name,user.email, user.role,  hash])
                const response =  result
                 return response.rows[0]
            }
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    async login (email:string, password:string): Promise<LoginData>{
        try {
            let isMatch;
            const db_connection = await client.connect()
            const check_email = 'select * from users where email = ($1)'
            const query_email = await  db_connection.query(check_email, [email])
            let query_result = query_email.rows
            if(query_result.length !== 0){
                isMatch= await bcrypt.compare(password, query_email.rows[0].password)
            }
            if(!isMatch){
                return Promise.reject("Incorrect login credentials")
            }
            return  query_result.length === 1 && isMatch === true ?  query_result[0] : null
        } catch (error:any) {
            return error.message
        } 
    }

    // Get all users
    async getUsers (): Promise <User[]> {
        try {
         const db_connection =await client.connect()
         const sql = `SELECT * FROM users`
         const query = await  db_connection.query(sql)
         return query.rows
        } catch (error:any) {
         return error
        }
    }

     // Get all users
     async getUserById (id:number): Promise <Users[]> {
        console.log(id)
        try {
         const db_connection = client.connect()
         const sql = `SELECT * FROM users WHERE id = ($1)`
         const query = await (await db_connection).query(sql, [id])
         return query.rows
        } catch (error:any) {
         return error
        }
    }

    // Delete user

    async deleteUser (id:number): Promise<Users> {
        try {
            const db_connection = client.connect()
            const query_id = `DELETE  FROM users WHERE id =($1)`
            const sql = await (await db_connection).query(query_id, [id])
            return sql.rows[0]
        } catch (error:any) {
            return error
        }
    }

     // UPDATE user

   
     async editUser (id:string, name?:string, email?:string, role?:string ): Promise<[]> {
        try {
            const db_connection = await client.connect()
            // const query_id = `select * from users where id = ${id}`
            // const id_result = await db_connection.query(query_id)
            // if(id_result.rowCount != 0){
            //     throw new Error("No user found for the operation")
            // }
            const query = `UPDATE users SET name = $1, email = $2, role = $3 WHERE id = ${id}`
            const result = await db_connection.query(query, [name, email, role])
            if(result.rowCount !== 0){
                return result.rows[0]
            }
            return result.rows[0]
        } catch (error:any) {
            return error
        }
    }

       // Get Doctors
       async getDoctors (): Promise <Users[]> {
        try {
         const db_connection = client.connect()
         const sql = `SELECT * FROM users WHERE role = 'doctor' `
         const query = await (await db_connection).query(sql)
         return query.rows
        } catch (error:any) {
         return error
        }
    }

}