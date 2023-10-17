import {Router} from 'express'
import {resetPassword} from '../controller/ResetPassword'

const router = Router()

router.put('/', resetPassword)


export default router