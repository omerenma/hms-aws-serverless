"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModel = void 0;
const database_1 = require("../database/database");
class AppointmentModel {
    async addAppointment(user) {
        try {
            const db_connection = await database_1.client.connect();
            const sql = 'INSERT INTO appointments (patient_name, patient_email, doctor_email, date) VALUES ($1, $2, $3, $4) RETURNING * ';
            const result = await db_connection.query(sql, [user.patient_name, user.doctor_email, user.date, user.patient_email,]);
            const response = result;
            return response.rows[0];
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getAppointment() {
        try {
            const db_connection = await database_1.client.connect();
            const sql = "SELECT * FROM appointments";
            const result = await db_connection.query(sql);
            const response = result;
            return response.rows;
        }
        catch (error) {
            return error;
        }
    }
}
exports.AppointmentModel = AppointmentModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwb2ludG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcHBvaW50bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBMkM7QUFHM0MsTUFBYSxnQkFBZ0I7SUFDekIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFnQjtRQUNqQyxJQUFJO1lBQ0ksTUFBTSxhQUFhLEdBQUcsTUFBTSxpQkFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQzVDLE1BQU0sR0FBRyxHQUFHLGlIQUFpSCxDQUFDO1lBQzlILE1BQU0sTUFBTSxHQUFJLE1BQU0sYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFHLENBQUMsQ0FBQTtZQUN4SCxNQUFNLFFBQVEsR0FBSSxNQUFNLENBQUE7WUFDdkIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBRS9CO1FBQUMsT0FBTyxLQUFTLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUN6QjtJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYztRQUNoQixJQUFJO1lBQ0EsTUFBTSxhQUFhLEdBQUcsTUFBTSxpQkFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQzVDLE1BQU0sR0FBRyxHQUFHLDRCQUE0QixDQUFDO1lBQ3pDLE1BQU0sTUFBTSxHQUFHLE1BQU0sYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUM3QyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUE7WUFDdkIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFBO1NBRXZCO1FBQUMsT0FBTyxLQUFTLEVBQUU7WUFDaEIsT0FBTyxLQUFLLENBQUE7U0FDZjtJQUNMLENBQUM7Q0FFSjtBQTNCRCw0Q0EyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NsaWVudH0gZnJvbSAnLi4vZGF0YWJhc2UvZGF0YWJhc2UnXHJcbmltcG9ydCB7IEFwcG9pbnRtZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlL0FwcG9pbnRtZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBvaW50bWVudE1vZGVsIHtcclxuICAgIGFzeW5jIGFkZEFwcG9pbnRtZW50KHVzZXI6QXBwb2ludG1lbnQpOiBQcm9taXNlPFtdPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiX2Nvbm5lY3Rpb24gPSBhd2FpdCBjbGllbnQuY29ubmVjdCgpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcWwgPSAnSU5TRVJUIElOVE8gYXBwb2ludG1lbnRzIChwYXRpZW50X25hbWUsIHBhdGllbnRfZW1haWwsIGRvY3Rvcl9lbWFpbCwgZGF0ZSkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCkgUkVUVVJOSU5HICogJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICBhd2FpdCBkYl9jb25uZWN0aW9uLnF1ZXJ5KHNxbCwgWyB1c2VyLnBhdGllbnRfbmFtZSwgdXNlci5kb2N0b3JfZW1haWwsIHVzZXIuZGF0ZSwgdXNlci5wYXRpZW50X2VtYWlsLCBdKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnJvd3NbMF1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6YW55KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0QXBwb2ludG1lbnQgKCk6UHJvbWlzZTxBcHBvaW50bWVudFtdPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGJfY29ubmVjdGlvbiA9IGF3YWl0IGNsaWVudC5jb25uZWN0KClcclxuICAgICAgICAgICAgY29uc3Qgc3FsID0gXCJTRUxFQ1QgKiBGUk9NIGFwcG9pbnRtZW50c1wiO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYl9jb25uZWN0aW9uLnF1ZXJ5KHNxbClcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXN1bHRcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnJvd3NcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6YW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=