import {Router} from 'express'
import { createDoctor, getDocotrById, getDoctors, deleteUser, editUser } from '../controller/Doctors'
import { verifyToken } from '../middlewares/verifyTokens'

const router = Router()

router.post('/add', createDoctor)
router.get('/get',  getDoctors)
router.get('/get/:id', getDocotrById)
router.put("/:id",  editUser)
router.delete('/:id', deleteUser)

export default router