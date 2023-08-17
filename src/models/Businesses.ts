import { response } from "express";
import { client, client_dev } from "../database/database";
import { Businneses } from "../interface/Bussiness";
const bcrypt = require("bcryptjs");

export class BusinessModel {
  async addBusiness(data: Businneses): Promise<[]> {
    try {
      const db_connection = await client_dev.connect();
      const queryId = "select * from business where email = ($1)";
      const query_result = await db_connection.query(queryId, [data.email]);

      if (query_result.rows.length > 0) {
        throw new Error("Business already exists");
      }
      const hash = bcrypt.hashSync(data.password, 10);
      const sql = "INSERT INTO business (name, email, phone,role, address, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ";
      const sql_users =
        "INSERT INTO users (business_id, name, email, role, password) VALUES ($1, $2, $3, $4, $5) RETURNING * ";

      const result = await db_connection.query(sql, [
        data.name,
        data.email,
        data.phone,
        data.role,
        data.address,
        hash,
      ]);

    
      let business_id;
      Object.values(result.rows).forEach((item) => {
         business_id = item.id;
      });

      await db_connection.query(sql_users, [
        business_id,
        data.name,
        data.email,
        data.role,
        hash,
      ]);

      const response = result;

      return response.rows[0];
    } catch (error: any) {
      throw new Error(error);
    }
  }


  async verifyBusiness(id: string): Promise<[]> {
    try {
      const db_connection = await client_dev.connect();
      const queryId = "select * from business where id = ($1)";
      const query_result = await db_connection.query(queryId, [id]);
      const update = `UPDATE business set verify = 'true' where id = ${id}`;
      const result =  await db_connection.query(update)
      
      return result.rows[0]
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
