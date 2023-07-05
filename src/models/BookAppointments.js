"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAppointmentModel = void 0;
const database_1 = require("../database/database");
class BookAppointmentModel {
    async booAppointment(user) {
        try {
            const db_connection = await database_1.client.connect();
            const sql = 'INSERT INTO book_appointments (patient_id, doctor_id, appointment_date) VALUES ($1, $2, $3) RETURNING * ';
            const result = await db_connection.query(sql, [user.patient_id, user.doctor_id, user.appointment_date]);
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
            const sql = "SELECT * FROM book_appointments JOIN patients ON patients_id=patient_id JOIN doctors ON id_doctor=doctor_id";
            const result = await db_connection.query(sql);
            const response = result;
            return response.rows;
        }
        catch (error) {
            return error;
        }
    }
    async getAppointmentByDoctorId(id) {
        try {
            const db_connection = await database_1.client.connect();
            const sql = "SELECT * FROM book_appointments JOIN patients ON patients_id=patient_id JOIN doctors ON id_doctor=doctor_id WHERE id_doctor = ($1)";
            const result = await db_connection.query(sql, [id]);
            return result.rows;
        }
        catch (error) {
            return error.message;
        }
    }
}
exports.BookAppointmentModel = BookAppointmentModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va0FwcG9pbnRtZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJvb2tBcHBvaW50bWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQTJDO0FBUTNDLE1BQWEsb0JBQW9CO0lBQzdCLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBb0I7UUFDckMsSUFBSTtZQUNJLE1BQU0sYUFBYSxHQUFHLE1BQU0saUJBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUM1QyxNQUFNLEdBQUcsR0FBRywwR0FBMEcsQ0FBQztZQUN2SCxNQUFNLE1BQU0sR0FBSSxNQUFNLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFDLENBQUE7WUFDMUcsTUFBTSxRQUFRLEdBQUksTUFBTSxDQUFBO1lBQ3ZCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUUvQjtRQUFDLE9BQU8sS0FBUyxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDekI7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLGNBQWM7UUFDaEIsSUFBSTtZQUNBLE1BQU0sYUFBYSxHQUFHLE1BQU0saUJBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUM1QyxNQUFNLEdBQUcsR0FBRyw2R0FBNkcsQ0FBQztZQUMxSCxNQUFNLE1BQU0sR0FBRyxNQUFNLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDN0MsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFBO1lBQ3ZCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQTtTQUV2QjtRQUFDLE9BQU8sS0FBUyxFQUFFO1lBQ2hCLE9BQU8sS0FBSyxDQUFBO1NBQ2Y7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEVBQVM7UUFDcEMsSUFBSTtZQUNBLE1BQU0sYUFBYSxHQUFHLE1BQU0saUJBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUM1QyxNQUFNLEdBQUcsR0FBRyxvSUFBb0ksQ0FBQztZQUNqSixNQUFNLE1BQU0sR0FBRyxNQUFNLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUNuRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUE7U0FHckI7UUFBQyxPQUFPLEtBQVMsRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUE7U0FFdkI7SUFFTCxDQUFDO0NBQ0o7QUF6Q0Qsb0RBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjbGllbnR9IGZyb20gJy4uL2RhdGFiYXNlL2RhdGFiYXNlJ1xyXG5pbXBvcnQgeyBBcHBvaW50bWVudCB9IGZyb20gJy4uL2ludGVyZmFjZS9BcHBvaW50bWVudCc7XHJcblxyXG5pbnRlcmZhY2UgQXBwb2ludG1lbnREYXRhIHtcclxuICAgIHBhdGllbnRfaWQ6c3RyaW5nO1xyXG4gICAgZG9jdG9yX2lkOnN0cmluZztcclxuICAgIGFwcG9pbnRtZW50X2RhdGU6c3RyaW5nXHJcbn1cclxuZXhwb3J0IGNsYXNzIEJvb2tBcHBvaW50bWVudE1vZGVsIHtcclxuICAgIGFzeW5jIGJvb0FwcG9pbnRtZW50KHVzZXI6QXBwb2ludG1lbnREYXRhKTogUHJvbWlzZTxbXT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYl9jb25uZWN0aW9uID0gYXdhaXQgY2xpZW50LmNvbm5lY3QoKVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3FsID0gJ0lOU0VSVCBJTlRPIGJvb2tfYXBwb2ludG1lbnRzIChwYXRpZW50X2lkLCBkb2N0b3JfaWQsIGFwcG9pbnRtZW50X2RhdGUpIFZBTFVFUyAoJDEsICQyLCAkMykgUkVUVVJOSU5HICogJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICBhd2FpdCBkYl9jb25uZWN0aW9uLnF1ZXJ5KHNxbCwgWyB1c2VyLnBhdGllbnRfaWQsIHVzZXIuZG9jdG9yX2lkLCB1c2VyLmFwcG9pbnRtZW50X2RhdGUgXSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5yb3dzWzBdXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOmFueSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEFwcG9pbnRtZW50ICgpOlByb21pc2U8QXBwb2ludG1lbnRbXT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRiX2Nvbm5lY3Rpb24gPSBhd2FpdCBjbGllbnQuY29ubmVjdCgpXHJcbiAgICAgICAgICAgIGNvbnN0IHNxbCA9IFwiU0VMRUNUICogRlJPTSBib29rX2FwcG9pbnRtZW50cyBKT0lOIHBhdGllbnRzIE9OIHBhdGllbnRzX2lkPXBhdGllbnRfaWQgSk9JTiBkb2N0b3JzIE9OIGlkX2RvY3Rvcj1kb2N0b3JfaWRcIjtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGJfY29ubmVjdGlvbi5xdWVyeShzcWwpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzdWx0XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5yb3dzXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOmFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0QXBwb2ludG1lbnRCeURvY3RvcklkKGlkOnN0cmluZyk6UHJvbWlzZTx7fT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRiX2Nvbm5lY3Rpb24gPSBhd2FpdCBjbGllbnQuY29ubmVjdCgpXHJcbiAgICAgICAgICAgIGNvbnN0IHNxbCA9IFwiU0VMRUNUICogRlJPTSBib29rX2FwcG9pbnRtZW50cyBKT0lOIHBhdGllbnRzIE9OIHBhdGllbnRzX2lkPXBhdGllbnRfaWQgSk9JTiBkb2N0b3JzIE9OIGlkX2RvY3Rvcj1kb2N0b3JfaWQgV0hFUkUgaWRfZG9jdG9yID0gKCQxKVwiO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYl9jb25uZWN0aW9uLnF1ZXJ5KHNxbCwgW2lkXSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yb3dzXHJcblxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcjphbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdfQ==