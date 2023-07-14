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
    // console.log(req.body, 'query parameter')
    if(!req.body.reference){
        throw new Error('Missing transaction reference')
    }

    const data= await paystackApi.verifyPayment(req.body.reference as string)
    console.log('Verify :', data)

    res.status(200).send({
        message:"Subscription verified successfully",
        data
    })
    
  }
}

const paystackController = new PaystackController()
export default paystackController

// export const paystack_payment = async (req:Request, res:Response) => {
//     try {
//         const data = req.body
//         axios({
//             url: config.paystack_base_uri as string,
//             method:'POST',
//             data:JSON.stringify(data),
//             headers:{
//                 'Content-Type':"application/json",
//                 Authorization:`Bearer ${config.paystack_secret as string}`
//             }
//         })

//     } catch (error:any) {
//         console.log(error.message)
//     }

// }

// export const inializeTransaction = async (req:Request, res:Response) =>{
//     try {
//         const response = await axios({
//             url:`${config.paystack_base_uri}/initialize`,
//             method:'POST',
//             data:JSON.stringify(req.body),
//             headers:{
//                 'Content-Type':'application/json',
//                 Authorization:`Bearer ${config.paystack_secret as string}`
//             }
//         })
//         console.log('Initialize reponse', response)
//         return response.data
//     } catch (error:any) {
//         console.log(error.message)
//     }
// }
