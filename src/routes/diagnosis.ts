import {Router} from 'express'
import { createDiagnosis, getAllDiagnosis, getPatientDiagnosis , updeDiagnosis} from '../controller/Diagnosis';
import { verifyToken } from '../middlewares/verifyTokens';
const router = Router();

router.get('/all-diagnosis',verifyToken, getAllDiagnosis)
router.post('/add', verifyToken, createDiagnosis)
router.get('/diagnosis', verifyToken ,getPatientDiagnosis)
router.put('/update/:id', verifyToken, updeDiagnosis)

export default router