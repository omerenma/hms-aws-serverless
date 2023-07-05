"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Diagnosis_1 = require("../controller/Diagnosis");
const verifyTokens_1 = require("../middlewares/verifyTokens");
const router = (0, express_1.Router)();
router.get('/all-diagnosis', Diagnosis_1.getAllDiagnosis);
router.post('/add', Diagnosis_1.createDiagnosis);
router.get('/diagnosis', verifyTokens_1.verifyToken, Diagnosis_1.getPatientDiagnosis);
router.put('/update/:id', verifyTokens_1.verifyToken, Diagnosis_1.updeDiagnosis);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc2lzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlhZ25vc2lzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQThCO0FBQzlCLHVEQUErRztBQUMvRyw4REFBMEQ7QUFDMUQsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFFeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSwyQkFBZSxDQUFDLENBQUE7QUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUcsMkJBQWUsQ0FBQyxDQUFBO0FBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLDBCQUFXLEVBQUUsK0JBQW1CLENBQUMsQ0FBQTtBQUMxRCxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSwwQkFBVyxFQUFFLHlCQUFhLENBQUMsQ0FBQTtBQUVyRCxrQkFBZSxNQUFNLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlcn0gZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IHsgY3JlYXRlRGlhZ25vc2lzLCBnZXRBbGxEaWFnbm9zaXMsIGdldFBhdGllbnREaWFnbm9zaXMgLCB1cGRlRGlhZ25vc2lzfSBmcm9tICcuLi9jb250cm9sbGVyL0RpYWdub3Npcyc7XHJcbmltcG9ydCB7IHZlcmlmeVRva2VuIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMvdmVyaWZ5VG9rZW5zJztcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvYWxsLWRpYWdub3NpcycsIGdldEFsbERpYWdub3Npcylcclxucm91dGVyLnBvc3QoJy9hZGQnLCAgY3JlYXRlRGlhZ25vc2lzKVxyXG5yb3V0ZXIuZ2V0KCcvZGlhZ25vc2lzJywgdmVyaWZ5VG9rZW4gLGdldFBhdGllbnREaWFnbm9zaXMpXHJcbnJvdXRlci5wdXQoJy91cGRhdGUvOmlkJywgdmVyaWZ5VG9rZW4sIHVwZGVEaWFnbm9zaXMpXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIiXX0=