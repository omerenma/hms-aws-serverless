import {Router} from 'express'
import { createDoctor, getDocotrById, getDoctors, deleteUser, editUser } from '../controller/Doctors'
import { verifyToken } from '../middlewares/verifyTokens'

const router = Router()

router.post('/add', verifyToken, createDoctor)
router.get('/get', verifyToken,  getDoctors)
router.get('/get/:id',verifyToken, getDocotrById)
router.put("/:id", verifyToken, editUser)
router.delete('/:id', verifyToken, deleteUser)

export default router