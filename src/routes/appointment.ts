import {Router} from 'express'
import { createAppointment, getAppointment } from '../controller/Appointment'
import { verifyToken } from '../middlewares/verifyTokens'

const router = Router()

router.post('/add', createAppointment)
router.get('/get', getAppointment)

export default router