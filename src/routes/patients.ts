import {Router} from 'express'
import { createPatient, editPatient, deletePatient, getPatients, getPatientsById} from '../controller/Patients'
import { verifyToken } from '../middlewares/verifyTokens'

const router = Router()
router.get('/', getPatients)
router.get('/:id', getPatientsById)
router.post('/add', createPatient)
router.put('/:id', editPatient)
router.delete('/:id',  deletePatient)

export default router