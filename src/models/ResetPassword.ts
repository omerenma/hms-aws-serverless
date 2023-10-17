import {client, client_dev} from '../database/database'



export class ResetPasswordModel {
    async resetPassword(token:string): Promise<any> {
        try {
            const db_connection = await client_dev.connect()

            const checkToken = "SELECT * FROM tokens WHERE token=($1)"
            const deleteToken = "DELETE FROM tokens WHERE token=($1)"
            const query_token = await db_connection.query(checkToken, [token])
            if(!query_token.rows){
                throw new Error(`User  not found for this email.`)
            }else{
                // update password column-
                // delete token from db
                    // await db_connection.query(deleteToken, [token])
                 return query_token.rows
            }
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    async updatePassword(password:string, email:string):Promise<any>{
        try {
            const db_connection = await client_dev.connect()
            const queryUser = `select * from users where email = ($1)`
            const updateUserPassword = `UPDATE users SET password = $1 where "email" = $2 RETURNING *`
            const query = await db_connection.query(queryUser, [email])
            if(query.rows.length){
                 const update = await db_connection.query(updateUserPassword, [password, email])
                 return update
                // return query.rows[0]

            }else{
                throw new Error('Password update not successful')
            }

 
        } catch (error:any) {
            throw new Error(error.message)
            
        }

    }
}