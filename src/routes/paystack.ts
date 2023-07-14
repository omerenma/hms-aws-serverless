import express from 'express'
// import {inializeTransaction, paystack_payment} from '../api/PaystackApi'
import paystackController from '../controller/PaystackController'

const router = express.Router()


router.post('/verify',paystackController.verifyPayment )
router.post('/initialize' , paystackController.initializePayment)
export default router