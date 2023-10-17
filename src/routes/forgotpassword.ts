import {Router} from 'express'
import {forgotPassword} from '../controller/ForgorPassword'

const router = Router()

router.post('/', forgotPassword)


export default router