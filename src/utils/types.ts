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
