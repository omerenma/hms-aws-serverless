import {Router} from 'express'
import { createAppointment, getAppointment , getDoctorAppointmentById} from '../controller/Appointment'
import { verifyToken } from '../middlewares/verifyTokens'

const router = Router()

router.post('/add',  createAppointment)
router.get('/get',  getAppointment)
router.get('/get/:id',  getDoctorAppointmentById)

export default router