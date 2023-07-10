import {Router} from 'express'
import { createAppointment, getAppointments, getAppointmentByDoctorId } from '../controller/BookAppointments'
import { verifyToken } from '../middlewares/verifyTokens'

const router = Router()

router.post('/book', verifyToken, createAppointment)
router.get('/getappointments', verifyToken, getAppointments)
router.get('/getappointments/:id', verifyToken, getAppointmentByDoctorId)
export default router