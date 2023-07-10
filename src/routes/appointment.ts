import {Router} from 'express'
import { createAppointment, getAppointment , getDoctorAppointment} from '../controller/Appointment'
import { verifyToken } from '../middlewares/verifyTokens'

const router = Router()

router.post('/add', verifyToken, createAppointment)
router.get('/get', verifyToken,  getAppointment)
router.get('/get/:id', verifyToken, getDoctorAppointment)

export default router