import { client, client_dev } from "../database/database";
import { Subscription } from "../utils/types";

export class SubscriptionModel {
  async addSubscription(data: Subscription): Promise<Subscription> {
    try {
      const db_connection = await client_dev.connect();
      const business_email = "SELECT * FROM business where email = ($1)";
      const query_email = await db_connection.query(business_email, [
        data.email,
      ]);
      const business_query = query_email.rows;

      let business_id;
      Object.values(business_query).forEach((item) => {
        business_id = item.id;
      });
      const sql =
        "INSERT INTO subscription (business_id, subscription_id, amount, reference, name, email, phone, subscription_status,  expired) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ";
      const result = await db_connection.query(sql, [
        business_id,
        data.subscription_id,
        data.amount,
        data.reference,
        data.name,
        data.email,
        data.phone,
        data.subscription_status,
        data.expired,
      ]);
      const response = result;
      return response.rows[0];
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  // Get all users
  //   async getUsers(): Promise<User[]> {
  //     try {
  //       const db_connection = await client_dev.connect();
  //       const sql = `SELECT * FROM users`;
  //       const query = await db_connection.query(sql);
  //       return query.rows;
  //     } catch (error: any) {
  //       return error;
  //     }
  //   }

  // Get all users
  //   async getUserById(id: number): Promise<Users[]> {
  //     console.log(id);
  //     try {
  //       const db_connection = client_dev.connect();
  //       const sql = `SELECT * FROM users WHERE id = ($1)`;
  //       const query = await (await db_connection).query(sql, [id]);
  //       return query.rows;
  //     } catch (error: any) {
  //       return error;
  //     }
  //   }

  // Delete user

  //   async deleteUser(id: number): Promise<Users> {
  //     try {
  //       const db_connection = client_dev.connect();
  //       const query_id = `DELETE  FROM users WHERE id =($1)`;
  //       const sql = await (await db_connection).query(query_id, [id]);
  //       return sql.rows[0];
  //     } catch (error: any) {
  //       return error;
  //     }
  //   }

  // UPDATE user

  //   async editUser(
  //     id: string,
  //     name?: string,
  //     email?: string,
  //     role?: string
  //   ): Promise<[]> {
  //     try {
  //       const db_connection = await client_dev.connect();
  //       // const query_id = `select * from users where id = ${id}`
  //       // const id_result = await db_connection.query(query_id)
  //       // if(id_result.rowCount != 0){
  //       //     throw new Error("No user found for the operation")
  //       // }
  //       const query = `UPDATE users SET name = $1, email = $2, role = $3 WHERE id = ${id}`;
  //       const result = await db_connection.query(query, [name, email, role]);
  //       if (result.rowCount !== 0) {
  //         return result.rows[0];
  //       }
  //       return result.rows[0];
  //     } catch (error: any) {
  //       return error;
  //     }
  //   }

  // Get Doctors
  //   async getDoctors(): Promise<Users[]> {
  //     try {
  //       const db_connection = client_dev.connect();
  //       const sql = `SELECT * FROM users WHERE role = 'doctor' `;
  //       const query = await (await db_connection).query(sql);
  //       return query.rows;
  //     } catch (error: any) {
  //       return error;
  //     }
  //   }
}
