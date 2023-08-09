import {Router} from 'express'
import {createEnquiry} from '../controller/Enquiry'

const router = Router()

router.post('/add', createEnquiry)


export default router