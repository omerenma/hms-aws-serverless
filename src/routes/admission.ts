import {Router} from 'express'
import { createAdmission, getAdmission } from '../controller/Admission'
import { verifyToken } from '../middlewares/verifyTokens'

const router = Router()

router.post('/add', verifyToken,  createAdmission)
router.get('/get',verifyToken, getAdmission)

export default router