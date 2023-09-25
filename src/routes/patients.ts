import {Router} from 'express'
import { createPatient, editPatient, deletPatient, getPatients} from '../controller/Patients'
import { verifyToken } from '../middlewares/verifyTokens'

const router = Router()
router.get('/', getPatients)
router.get('/patient/:id', verifyToken, getPatients)
router.post('/add', verifyToken, createPatient)
router.put('/patient/:id', verifyToken ,editPatient)
router.delete('/patient/:id', verifyToken, deletPatient)

export default router