import {Router} from 'express'
import { createAdmission, getAdmission } from '../controller/Admission'
import { verifyToken } from '../middlewares/verifyTokens'

const router = Router()

router.post('/add',   createAdmission)
router.get('/get',getAdmission)

export default router