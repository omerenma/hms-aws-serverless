import { client, client_dev } from "../database/database";
import { Patient, UpdatePatient } from "../interface/Patient";

export class PatientModel {
  async addPatient(user: Patient): Promise<{ message: string }> {
    try {
      const db_connection = await client_dev.connect();
      const sql =
        "INSERT INTO patients (patient_name, patient_sex, dob,residential_address , patient_email, patient_phone_no, next_of_kin_name, next_of_kin_phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ";
      const result = await db_connection.query(sql, [
        user.patient_name,
        user.patient_sex,
        user.dob,
        user.residential_address,
        user.patient_email,
        user.patient_phone_no,
        user.next_of_kin_name,
        user.next_of_kin_phone,
      ]);
      const response = result;
      return response.rows[0];
    } catch (error: any) {
      throw new Error(error);
    }
  }

  // Delete patient
  async deletePatient(id: any): Promise<any> {
    try {
      const db_connection = await client_dev.connect();
      const query_id = "DELETE  from patients WHERE id = ($1)";
      const sql = await db_connection.query(query_id, [id]);
      if (sql.rows.length > 0) {
        return sql.rows[0];
      }
      return sql.rows[0];
    } catch (error: any) {
      return error;
    }
  }

  // UPDATE patient
  
  async editPatient(user: UpdatePatient): Promise<UpdatePatient> {
    const id = JSON.stringify(user.id)
    
    try {
      const db_connection = await client_dev.connect();
      const query = `UPDATE patients SET (patient_name, patient_sex, dob, residential_address, patient_email, patient_phone_no,next_of_kin_name,next_of_kin_phone) = ($1, $2, $3, $4, $5,- $6, $7, $8)  WHERE patients.id = ${id}`;
      const sql = await db_connection.query(query, [user.patient_name, user.patient_sex, user.dob, user.residential_address, user.patient_email, user.patient_phone_no, user.next_of_kin_name, user.next_of_kin_phone]);
      console.log('sql', sql)
      if (sql.rows.length > 0) {
         sql.rows[0];
      }
      return sql.rows[0];
    } catch (error: any) {
      return error;
    }
  }

  // Get Patient
  async getPatients(): Promise<Patient[]> {
    try {
      const db_connection = client_dev.connect();
      const sql = `SELECT * FROM patients`;
      const query = await (await db_connection).query(sql);
      return query.rows;
    } catch (error: any) {
      return error;
    }
  }
  async getPatientsById(id: any): Promise<Patient> {
    try {
      const db_connection = await client_dev.connect();
      const sql = `SELECT * FROM patients WHERE id = ($1)`;
      const query = await db_connection.query(sql, [id]);
      return query.rows[0];
    } catch (error: any) {
      return error;
    }
  }
}
