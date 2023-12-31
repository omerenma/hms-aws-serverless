import express from 'express'
import cors from 'cors'
// import {inializeTransaction, paystack_payment} from '../api/PaystackApi'
import paystackController from '../controller/PaystackController'

const router = express.Router()


router.get('/verify/:reference' ,  paystackController.verifyPayment )
router.post('/initialize' , paystackController.initializePayment)
export default router