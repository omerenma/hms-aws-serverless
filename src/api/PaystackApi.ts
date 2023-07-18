import axios from "axios";
import config from "../config/config";
import PaystackBaseApi from "./Paystack";


interface Metadata {
    email: string;
    name: string;
    amount: number;
    phone:string;
  }

export interface InitializePaymentArgs {
    email:string;
    amount: number;
    phone:string;
    name:string;
    callback_url?:string;
    metadata:Metadata

}

interface PaystackAPIResponse<T> {
    status: boolean;
    message: string;
    data: T;
  }


interface InitializePaymentRawResponse  {
    status:boolean;
    message:string;
    data: {
        authorization_url: string;
        access_code: string;
        reference:string
    }

}

interface VerifyPaymentResponse { 
    status:boolean;
    message: string;
    data: {
        amount:number;
        reference:string;
        id:number;
        metadata:Metadata
    }
}

class PaystackApi extends PaystackBaseApi {
    requestInt ={
        headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${config.paystack_secret}`
        }
    }
    getTequestInt ={
        headers:{
            Authorization:`Bearer ${config.paystack_secret}`
        }
    }
    constructor(){
        super(config.paystack_base_uri as string)
    }
    
    initializePayment = async (paymentDetails:InitializePaymentArgs) => {
        const response = await this.post(`/transaction/initialize`,
            paymentDetails,
            undefined,
            this.requestInt
        )
        return response.data
    }

   
    verifyPayment = async (reference: string) => {
        const response = await axios.get("https://api.paystack.co/transaction/verify/"+reference, {
            headers:{
                Authorization: `Bearer sk_test_25cb401b5cca6f6fe50498949d3689b4629e3a81`
            }
        })

    //    const response = await  this.get(`/transaction/verify/${paymentReference}`, 
    //    this.getTequestInt.headers
    //    )
       return response.data
    } 

}
const paystackApi = new PaystackApi()

export default paystackApi
