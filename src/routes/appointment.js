"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Appointment_1 = require("../controller/Appointment");
const router = (0, express_1.Router)();
router.post('/add', Appointment_1.createAppointment);
router.get('/get', Appointment_1.getAppointment);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBvaW50bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUE4QjtBQUM5QiwyREFBNkU7QUFHN0UsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUE7QUFFdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsK0JBQWlCLENBQUMsQ0FBQTtBQUN0QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSw0QkFBYyxDQUFDLENBQUE7QUFFbEMsa0JBQWUsTUFBTSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCB7IGNyZWF0ZUFwcG9pbnRtZW50LCBnZXRBcHBvaW50bWVudCB9IGZyb20gJy4uL2NvbnRyb2xsZXIvQXBwb2ludG1lbnQnXHJcbmltcG9ydCB7IHZlcmlmeVRva2VuIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMvdmVyaWZ5VG9rZW5zJ1xyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5wb3N0KCcvYWRkJywgY3JlYXRlQXBwb2ludG1lbnQpXHJcbnJvdXRlci5nZXQoJy9nZXQnLCBnZXRBcHBvaW50bWVudClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlciJdfQ==