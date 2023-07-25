import { Request, Response, response } from "express";
import paystackApi, { InitializePaymentArgs } from "../api/PaystackApi";
import { HttpStatusCode } from "axios";
import { SubscriptionModel } from "../models/Subscription";
const subscription = new SubscriptionModel()
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
        const reference = req.params.reference
        if(!reference){
            throw new Error('Missing transaction reference')
        }

        const data = await paystackApi.verifyPayment(reference)
      
        const body = {
          subscription_id: Number(data.data.id),
          amount:Number(data.data.metadata.amount),
          reference:String(data.data.reference),
          name: String(data.data.metadata.name),
          email: String(data.data.metadata.email) ,
          phone: String(data.data.metadata.phone),
          subscription_status:""
          
        }
          
          subscription.addSubscription(body)
          .then((response:any) => {
            return res.status(201).json(response)
          })
          .catch((err:any) => {
            return res.json(err.message)
          })

    } catch (error:any) {
        return error.message
      }
    }
    // console.log(req.body, 'query parameter')
}

const paystackController = new PaystackController()
export default paystackController

