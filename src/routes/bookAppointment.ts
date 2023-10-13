import {Router} from 'express'
import { createAppointment, getAppointments, getAppointmentByDoctorId } from '../controller/BookAppointments'
import { verifyToken } from '../middlewares/verifyTokens'

const router = Router()

router.post('/book',  createAppointment)
router.get('/getappointments', getAppointments)
router.get('/getappointments/:id',  getAppointmentByDoctorId)
export default router