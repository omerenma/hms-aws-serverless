import {Router} from 'express'
import {createDoctorRemark} from '../controller/DoctorRemark'


const router = Router()
router.post('/add', createDoctorRemark)
export default router