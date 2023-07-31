import { client, client_dev } from "../database/database";
import { Subscription } from "../utils/types";

export class SubscriptionModel {
  async addSubscription(data: Subscription): Promise<Subscription> {
    try {
      const db_connection = await client.connect();
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
}