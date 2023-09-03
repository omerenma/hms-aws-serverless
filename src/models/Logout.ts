import {client, client_dev} from '../database/database'

export class LogoutModel {
    async logout(token:string): Promise<[]> {
        try {
                const db_connection = await client_dev.connect()
                const sql = 'delete from tokens where token = ($1) ';
                const result =  await db_connection.query(sql, [ token ])
                const response =  result
                 return response.rows[0]
            
        } catch (error:any) {
            throw new Error(error)
        }
    }

}