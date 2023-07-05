"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Patients_1 = require("../controller/Patients");
const verifyTokens_1 = require("../middlewares/verifyTokens");
const router = (0, express_1.Router)();
router.get('/', Patients_1.getPatients);
router.get('/patient/:id', verifyTokens_1.verifyToken, Patients_1.getPatients);
router.post('/add', Patients_1.createPatient);
router.put('/patient/:id', verifyTokens_1.verifyToken, Patients_1.editPatient);
router.delete('/patient/:id', verifyTokens_1.verifyToken, Patients_1.deletPatient);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXRpZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUE4QjtBQUM5QixxREFBNkY7QUFDN0YsOERBQXlEO0FBRXpELE1BQU0sTUFBTSxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFBO0FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLHNCQUFXLENBQUMsQ0FBQTtBQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSwwQkFBVyxFQUFFLHNCQUFXLENBQUMsQ0FBQTtBQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSx3QkFBYSxDQUFDLENBQUE7QUFDbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsMEJBQVcsRUFBRSxzQkFBVyxDQUFDLENBQUE7QUFDcEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsMEJBQVcsRUFBRSx1QkFBWSxDQUFDLENBQUE7QUFFeEQsa0JBQWUsTUFBTSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCB7IGNyZWF0ZVBhdGllbnQsIGVkaXRQYXRpZW50LCBkZWxldFBhdGllbnQsIGdldFBhdGllbnRzfSBmcm9tICcuLi9jb250cm9sbGVyL1BhdGllbnRzJ1xyXG5pbXBvcnQgeyB2ZXJpZnlUb2tlbiB9IGZyb20gJy4uL21pZGRsZXdhcmVzL3ZlcmlmeVRva2VucydcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcbnJvdXRlci5nZXQoJy8nLCBnZXRQYXRpZW50cylcclxucm91dGVyLmdldCgnL3BhdGllbnQvOmlkJywgdmVyaWZ5VG9rZW4sIGdldFBhdGllbnRzKVxyXG5yb3V0ZXIucG9zdCgnL2FkZCcsIGNyZWF0ZVBhdGllbnQpXHJcbnJvdXRlci5wdXQoJy9wYXRpZW50LzppZCcsIHZlcmlmeVRva2VuICxlZGl0UGF0aWVudClcclxucm91dGVyLmRlbGV0ZSgnL3BhdGllbnQvOmlkJywgdmVyaWZ5VG9rZW4sIGRlbGV0UGF0aWVudClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlciJdfQ==