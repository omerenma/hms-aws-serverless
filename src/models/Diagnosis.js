"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosismentModel = void 0;
const database_1 = require("../database/database");
class DiagnosismentModel {
    async addDiagnosis(data) {
        try {
            const db_connection = database_1.client.connect();
            const sql = "INSERT INTO diagnosis (treatment_name, drug_administered, doctor_name, patient_email, bill, date, paid, description,  patient_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ";
            const result = await (await db_connection).query(sql, [
                data.treatment_name,
                data.drug_administered,
                data.doctor_name,
                data.patient_email,
                data.bill,
                data.date,
                data.paid,
                data.description,
                data.patient_status
            ]);
            const response = result;
            return response.rows[0];
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async updateDiagnosis(user) {
        try {
            const db_connection = await database_1.client.connect();
            const query = `UPDATE diagnosis SET (bill,
        date,
        description,
        doctor_email,
        doctor_name,
        drug_administered,
        paid,
        patient_email,
        patient_status,
        treatment_name) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)  WHERE id = ${user.id}`;
            const sql = await (db_connection).query(query, [
                user.bill,
                user.date,
                user.description,
                user.doctor_email,
                user.doctor_name,
                user.drug_administered,
                user.paid,
                user.patient_email,
                user.patient_status,
                user.treatment_name
            ]);
            if (sql.rows.length > 0) {
                return sql.rows[0].id;
            }
            return sql.rows[0];
        }
        catch (error) {
            return error;
        }
    }
    async getPatientDiagnosis(email) {
        try {
            const db_connection = database_1.client.connect();
            const sql = `SELECT * FROM diagnosis WHERE email = ${email}`;
            const query = await (await db_connection).query(sql, [email]);
            if (!query.rows) {
                "No record found";
            }
            return query.rows[0];
        }
        catch (error) {
            return error;
        }
    }
    async getAllDiagnosis() {
        try {
            const db_connection = await database_1.client.connect();
            const sql = `SELECT * FROM diagnosis`;
            const query = await db_connection.query(sql);
            return query.rows;
        }
        catch (error) {
            return error;
        }
    }
}
exports.DiagnosismentModel = DiagnosismentModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlhZ25vc2lzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGlhZ25vc2lzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUE4QztBQUc5QyxNQUFhLGtCQUFrQjtJQUM3QixLQUFLLENBQUMsWUFBWSxDQUFDLElBQWU7UUFDaEMsSUFBSTtZQUNGLE1BQU0sYUFBYSxHQUFHLGlCQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkMsTUFBTSxHQUFHLEdBQUcsZ01BQWdNLENBQUM7WUFDN00sTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUNuQixNQUFNLGFBQWEsQ0FDcEIsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNYLElBQUksQ0FBQyxjQUFjO2dCQUNuQixJQUFJLENBQUMsaUJBQWlCO2dCQUN0QixJQUFJLENBQUMsV0FBVztnQkFDaEIsSUFBSSxDQUFDLGFBQWE7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJO2dCQUNULElBQUksQ0FBQyxJQUFJO2dCQUNULElBQUksQ0FBQyxJQUFJO2dCQUNULElBQUksQ0FBQyxXQUFXO2dCQUNoQixJQUFJLENBQUMsY0FBYzthQUNwQixDQUFDLENBQUM7WUFDSCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDeEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO1FBQUMsT0FBTyxLQUFVLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLElBQW9CO1FBQ3hDLElBQUk7WUFDRixNQUFNLGFBQWEsR0FBRSxNQUFNLGlCQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFNUMsTUFBTSxLQUFLLEdBQUc7Ozs7Ozs7OztrRkFTOEQsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRXRGLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBRSxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUM5QyxJQUFJLENBQUMsSUFBSTtnQkFDVCxJQUFJLENBQUMsSUFBSTtnQkFDVCxJQUFJLENBQUMsV0FBVztnQkFDaEIsSUFBSSxDQUFDLFlBQVk7Z0JBQ2pCLElBQUksQ0FBQyxXQUFXO2dCQUNoQixJQUFJLENBQUMsaUJBQWlCO2dCQUN0QixJQUFJLENBQUMsSUFBSTtnQkFDVCxJQUFJLENBQUMsYUFBYTtnQkFDbEIsSUFBSSxDQUFDLGNBQWM7Z0JBQ25CLElBQUksQ0FBQyxjQUFjO2FBQ3BCLENBQUMsQ0FBQztZQUNILElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ3ZCO1lBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO1FBQUMsT0FBTyxLQUFVLEVBQUU7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsS0FBWTtRQUNsQyxJQUFJO1lBQ0EsTUFBTSxhQUFhLEdBQUcsaUJBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUN0QyxNQUFNLEdBQUcsR0FBRyx5Q0FBeUMsS0FBSyxFQUFFLENBQUE7WUFDNUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7WUFDN0QsSUFBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUM7Z0JBQ1osaUJBQWlCLENBQUE7YUFDbkI7WUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDcEI7UUFBQyxPQUFPLEtBQVMsRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQTtTQUNaO0lBQ1IsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlO1FBQ25CLElBQUk7WUFDRixNQUFNLGFBQWEsR0FBRyxNQUFNLGlCQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDNUMsTUFBTSxHQUFHLEdBQUcseUJBQXlCLENBQUE7WUFDckMsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzVDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQTtTQUVsQjtRQUFDLE9BQU8sS0FBUyxFQUFFO1lBQ2xCLE9BQU8sS0FBSyxDQUFBO1NBQ2I7SUFDSCxDQUFDO0NBQ0o7QUF0RkQsZ0RBc0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uL2RhdGFiYXNlL2RhdGFiYXNlXCI7XHJcbmltcG9ydCB7IERpYWdub3NpcywgVXBkYXRlRGlhZ25vc2lzIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9EaWFnbm9zaXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaWFnbm9zaXNtZW50TW9kZWwge1xyXG4gIGFzeW5jIGFkZERpYWdub3NpcyhkYXRhOiBEaWFnbm9zaXMpOiBQcm9taXNlPERpYWdub3Npcz4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGJfY29ubmVjdGlvbiA9IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgICAgIGNvbnN0IHNxbCA9IFwiSU5TRVJUIElOVE8gZGlhZ25vc2lzICh0cmVhdG1lbnRfbmFtZSwgZHJ1Z19hZG1pbmlzdGVyZWQsIGRvY3Rvcl9uYW1lLCBwYXRpZW50X2VtYWlsLCBiaWxsLCBkYXRlLCBwYWlkLCBkZXNjcmlwdGlvbiwgIHBhdGllbnRfc3RhdHVzKSBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0LCAkNSwgJDYsICQ3LCAkOCwgJDkpIFJFVFVSTklORyAqIFwiO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCAoXHJcbiAgICAgICAgYXdhaXQgZGJfY29ubmVjdGlvblxyXG4gICAgICApLnF1ZXJ5KHNxbCwgW1xyXG4gICAgICAgIGRhdGEudHJlYXRtZW50X25hbWUsXHJcbiAgICAgICAgZGF0YS5kcnVnX2FkbWluaXN0ZXJlZCxcclxuICAgICAgICBkYXRhLmRvY3Rvcl9uYW1lLFxyXG4gICAgICAgIGRhdGEucGF0aWVudF9lbWFpbCxcclxuICAgICAgICBkYXRhLmJpbGwsXHJcbiAgICAgICAgZGF0YS5kYXRlLFxyXG4gICAgICAgIGRhdGEucGFpZCxcclxuICAgICAgICBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGRhdGEucGF0aWVudF9zdGF0dXNcclxuICAgICAgXSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzdWx0O1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2Uucm93c1swXTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHVwZGF0ZURpYWdub3Npcyh1c2VyOlVwZGF0ZURpYWdub3Npcyk6IFByb21pc2U8VXBkYXRlRGlhZ25vc2lzPiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYl9jb25uZWN0aW9uID1hd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG5cclxuICAgICAgY29uc3QgcXVlcnkgPSBgVVBEQVRFIGRpYWdub3NpcyBTRVQgKGJpbGwsXHJcbiAgICAgICAgZGF0ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBkb2N0b3JfZW1haWwsXHJcbiAgICAgICAgZG9jdG9yX25hbWUsXHJcbiAgICAgICAgZHJ1Z19hZG1pbmlzdGVyZWQsXHJcbiAgICAgICAgcGFpZCxcclxuICAgICAgICBwYXRpZW50X2VtYWlsLFxyXG4gICAgICAgIHBhdGllbnRfc3RhdHVzLFxyXG4gICAgICAgIHRyZWF0bWVudF9uYW1lKSA9ICgkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNywgJDgsICQ5LCAkMTApICBXSEVSRSBpZCA9ICR7dXNlci5pZH1gO1xyXG5cclxuICAgICAgY29uc3Qgc3FsID0gYXdhaXQgKCBkYl9jb25uZWN0aW9uKS5xdWVyeShxdWVyeSwgW1xyXG4gICAgICAgIHVzZXIuYmlsbCxcclxuICAgICAgICB1c2VyLmRhdGUsXHJcbiAgICAgICAgdXNlci5kZXNjcmlwdGlvbixcclxuICAgICAgICB1c2VyLmRvY3Rvcl9lbWFpbCxcclxuICAgICAgICB1c2VyLmRvY3Rvcl9uYW1lLFxyXG4gICAgICAgIHVzZXIuZHJ1Z19hZG1pbmlzdGVyZWQsXHJcbiAgICAgICAgdXNlci5wYWlkLFxyXG4gICAgICAgIHVzZXIucGF0aWVudF9lbWFpbCxcclxuICAgICAgICB1c2VyLnBhdGllbnRfc3RhdHVzLFxyXG4gICAgICAgIHVzZXIudHJlYXRtZW50X25hbWVcclxuICAgICAgXSk7XHJcbiAgICAgIGlmIChzcWwucm93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHNxbC5yb3dzWzBdLmlkO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzcWwucm93c1swXTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgICBhc3luYyBnZXRQYXRpZW50RGlhZ25vc2lzKGVtYWlsOnN0cmluZyk6UHJvbWlzZTxEaWFnbm9zaXM+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYl9jb25uZWN0aW9uID0gY2xpZW50LmNvbm5lY3QoKVxyXG4gICAgICAgICAgICBjb25zdCBzcWwgPSBgU0VMRUNUICogRlJPTSBkaWFnbm9zaXMgV0hFUkUgZW1haWwgPSAke2VtYWlsfWBcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBhd2FpdCAoYXdhaXQgZGJfY29ubmVjdGlvbikucXVlcnkoc3FsLCBbZW1haWxdKVxyXG4gICAgICAgICAgICBpZighcXVlcnkucm93cyl7XHJcbiAgICAgICAgICAgICAgIFwiTm8gcmVjb3JkIGZvdW5kXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcXVlcnkucm93c1swXVxyXG4gICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOmFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0QWxsRGlhZ25vc2lzKCk6UHJvbWlzZTxEaWFnbm9zaXNbXT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRiX2Nvbm5lY3Rpb24gPSBhd2FpdCBjbGllbnQuY29ubmVjdCgpXHJcbiAgICAgICAgY29uc3Qgc3FsID0gYFNFTEVDVCAqIEZST00gZGlhZ25vc2lzYFxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgZGJfY29ubmVjdGlvbi5xdWVyeShzcWwpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5LnJvd3NcclxuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yOmFueSkge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19