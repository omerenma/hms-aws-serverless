import {client, client_dev} from '../database/database'
import { Users, Verify, Login, LoginData } from '../utils/types'
const bcrypt = require('bcryptjs')



export class TokensModel {
    async addToken(token:any): Promise<Users> {
        try {
            const db_connection = await client_dev.connect()
            const sql = 'INSERT INTO tokens (token) VALUES ($1) RETURNING * ';
           
                const result = await db_connection.query(sql,[token])
                const response =  result
                 return response.rows[0]
        } catch (error:any) {
            console.log('error db token', error.message)
            throw new Error(error.message)
        }
    }

   

}