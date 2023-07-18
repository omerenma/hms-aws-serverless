import { Request, Response } from "express";
import paystackApi, { InitializePaymentArgs } from "../api/PaystackApi";
import { HttpStatusCode } from "axios";


class PaystackController {
  initializePayment = async (req: Request, res: Response) => {
    try {
      const { amount, email, callbackUri, name, phone } = req.body;

      const paymentDetails: InitializePaymentArgs = {
        amount,
        email,
        phone,
        name,
        callback_url: callbackUri,
        metadata: {
          amount,
          email,
          name,
          phone
        },
      };

      const data = await paystackApi.initializePayment(paymentDetails);
      

      return res.status(HttpStatusCode.Ok).json({
        message: "Payment initialized successfully",
        data,
      });

    } catch (error:any) {
        return error.message
    }
  };

  verifyPayment = async (req:Request, res:Response) => {
    try {
        const {reference} = req.body
        if(!reference){
            throw new Error('Missing transaction reference')
        }

        const data = await paystackApi.verifyPayment(reference)

        
      return res.status(HttpStatusCode.Ok).json({
            message:"Subscription verified",
            data
        })
    } catch (error:any) {
        return error.message
      }
    }
    // console.log(req.body, 'query parameter')
}

const paystackController = new PaystackController()
export default paystackController

