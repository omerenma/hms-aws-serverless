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
      return res.status(HttpStatusCode.Ok).send({
        message: "Payment initialized successfully",
        data,
      });
    } catch (error) {
        console.log(error)
    }
  };

  verifyPayment = async (req:Request, res:Response) => {
    try {
        if(!req.body.reference){
            throw new Error('Missing transaction reference')
        }

        res.json({message:req.body})
        // const data= await paystackApi.verifyPayment(req.body.reference as string)
        // console.log('Verify :', data)
        // res.status(200).send({
        //     message:"Subscription verified successfully",
        //     data
        // })
    } catch (error) {
        return error
      }
    }
    // console.log(req.body, 'query parameter')
}

const paystackController = new PaystackController()
export default paystackController

