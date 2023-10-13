export interface Patient {
    patient_name:string;
    patient_sex:string;
    dob:string;
    residential_address:string; 
    // date:string; 
    patient_email:string; 
    patient_phone_no:string;
    next_of_kin_name:string;
    next_of_kin_phone:string;
}
export interface UpdatePatient {
    id:any;
    patient_name?:string 
    patient_sex:string
    dob:string
    residential_address?:string; 
    room_admitted?:string; 
    admission_no?:string; 
    patient_email?:string; 
    patient_phone_no?:string;
    next_of_kin_name?:string;
    next_of_kin_phone?:string;
}