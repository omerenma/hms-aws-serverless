export type Users = {
    id?: Number;
    name?: string;
    email: string;
    role:string;
    password: string
    // issent:Number
}
export type Verify = {
    username:string;
    email:string;
    token:string;
}
export type Login =  {
    email:string
    password:string
}
export interface LoginData {
   name:string;
   email:string;
   token:string;
   role:string;
   id:string
}

export interface LoginFailed {
    name:string;
    email:string;
    token:string;
    role:string
 }

 export interface Subscription {
    id?:string;
    subscription_id:number;
    amount:number;
    reference:string;
    name:string;
    email:string;
    phone:string;
    subscription_status?:string;
    // start_at?: Date;
    // end_at?:Date;
    expired?:Boolean;
    cancel?:Boolean
 }
