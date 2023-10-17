import {client, client_dev} from '../database/database'



export class ForgotPasswordModel {
    async forgotPassword(user:string): Promise<[]> {
        try {
            const db_connection = await client_dev.connect()

            const checkEmail = "SELECT * FROM users WHERE email=($1)"
            const query_email = await db_connection.query(checkEmail, [user])
            if(!query_email.rows){
                throw new Error(`User  not found for this email.`)
            }else{
                 return query_email.rows[0]
            }
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}