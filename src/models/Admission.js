"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmissionModel = void 0;
const database_1 = require("../database/database");
class AdmissionModel {
    async createAdmission(user) {
        try {
            const db_connection = await database_1.client.connect();
            const sql = 'INSERT INTO admissions (patients_id , admission_date, discharged_date ) VALUES ($1, $2, $3) RETURNING * ';
            const result = await db_connection.query(sql, [user.patients_id, user.admission_date, user.discharged_date]);
            const response = result;
            return response.rows[0];
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getAdmission() {
        try {
            const db_connection = await database_1.client.connect();
            const sql = "select * from admissions join patients on patients.patients_id = admissions.patients_id";
            const result = await db_connection.query(sql);
            const response = result;
            return response.rows;
        }
        catch (error) {
            return error;
        }
    }
}
exports.AdmissionModel = AdmissionModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaXNzaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWRtaXNzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUEyQztBQUczQyxNQUFhLGNBQWM7SUFDdkIsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFjO1FBQ2hDLElBQUk7WUFDSSxNQUFNLGFBQWEsR0FBRyxNQUFNLGlCQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDNUMsTUFBTSxHQUFHLEdBQUcsMEdBQTBHLENBQUM7WUFDdkgsTUFBTSxNQUFNLEdBQUcsTUFBTyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtZQUMvRyxNQUFNLFFBQVEsR0FBSSxNQUFNLENBQUE7WUFDdkIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBRS9CO1FBQUMsT0FBTyxLQUFTLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUN6QjtJQUVMLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWTtRQUNkLElBQUk7WUFDQSxNQUFNLGFBQWEsR0FBRyxNQUFNLGlCQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDNUMsTUFBTSxHQUFHLEdBQUcseUZBQXlGLENBQUM7WUFDdEcsTUFBTSxNQUFNLEdBQUcsTUFBTSxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzdDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQTtZQUN2QixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUE7U0FFdkI7UUFBQyxPQUFPLEtBQVMsRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQTtTQUNmO0lBQ0wsQ0FBQztDQUVKO0FBNUJELHdDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y2xpZW50fSBmcm9tICcuLi9kYXRhYmFzZS9kYXRhYmFzZSdcclxuaW1wb3J0IHsgQWRtaXNzaW9uLCBHZXRBZG1pc3Npb24gfSBmcm9tICcuLi9pbnRlcmZhY2UvQWRtaXNzaW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBZG1pc3Npb25Nb2RlbCB7XHJcbiAgICBhc3luYyBjcmVhdGVBZG1pc3Npb24odXNlcjpBZG1pc3Npb24pOiBQcm9taXNlPFtdPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiX2Nvbm5lY3Rpb24gPSBhd2FpdCBjbGllbnQuY29ubmVjdCgpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcWwgPSAnSU5TRVJUIElOVE8gYWRtaXNzaW9ucyAocGF0aWVudHNfaWQgLCBhZG1pc3Npb25fZGF0ZSwgZGlzY2hhcmdlZF9kYXRlICkgVkFMVUVTICgkMSwgJDIsICQzKSBSRVRVUk5JTkcgKiAnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgIGRiX2Nvbm5lY3Rpb24ucXVlcnkoc3FsLCBbICB1c2VyLnBhdGllbnRzX2lkLCB1c2VyLmFkbWlzc2lvbl9kYXRlLCB1c2VyLmRpc2NoYXJnZWRfZGF0ZV0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9ICByZXN1bHRcclxuICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2Uucm93c1swXVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcjphbnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0QWRtaXNzaW9uICgpOlByb21pc2U8R2V0QWRtaXNzaW9uW10+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYl9jb25uZWN0aW9uID0gYXdhaXQgY2xpZW50LmNvbm5lY3QoKVxyXG4gICAgICAgICAgICBjb25zdCBzcWwgPSBcInNlbGVjdCAqIGZyb20gYWRtaXNzaW9ucyBqb2luIHBhdGllbnRzIG9uIHBhdGllbnRzLnBhdGllbnRzX2lkID0gYWRtaXNzaW9ucy5wYXRpZW50c19pZFwiO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYl9jb25uZWN0aW9uLnF1ZXJ5KHNxbClcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXN1bHRcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnJvd3NcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6YW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19