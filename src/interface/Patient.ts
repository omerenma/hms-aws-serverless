export interface Patient {
    name:string;
    sex:string;
    dob:string;
    residential_address:string; 
    // date:string; 
    email:string; 
    phone_no:string;
    next_of_kin_name:string;
    next_of_kin_phone:string;
}
export interface UpdatePatient {
    id:any;
    name?:string 
    sex:string
    dob:string
    residential_address?:string; 
    room_admitted?:string; 
    admission_no?:string; 
    email?:string; 
    phone_no?:string;
    next_of_kin_name?:string;
    next_of_kin_phone?:string;
}