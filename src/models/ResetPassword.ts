import {client, client_dev} from '../database/database'



export class ResetPasswordModel {
    async resetPassword(token:any): Promise<any> {
        try {
            const db_connection = await client_dev.connect()

            const checkToken = "SELECT * FROM tokens WHERE token = ($1)"
            const deleteToken = "DELETE FROM tokens WHERE token = ($1)"
            const query_token = await db_connection.query(checkToken, [token])
            if(!query_token.rows){
                throw new Error(`User  not found for this email.`)
            }else{
                // update password column-
                // delete token from db
                     await db_connection.query(deleteToken, [token])
                 return query_token.rows[0]
            }
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    async updatePassword(password:string, email:string):Promise<[]>{
        try {
            const db_connection = await client_dev.connect()
            const queryUser = `select * from users where email = ($1)`
            const updateUserPassword = `UPDATE users SET password = $1 where email = $2 RETURNING *`
            const query = await db_connection.query(queryUser, [email])
            if(query.rows.length > 0){
                 const update = await db_connection.query(updateUserPassword, [password, email])
                 return update.rows[0]
                // return query.rows[0]

            }else{
                console.log('not updated')
                throw new Error('Password update not successful')
            }

 
        } catch (error:any) {
            console.log('error updatate dbs', error)
            throw new Error(error.message)
            
        }

    }
}