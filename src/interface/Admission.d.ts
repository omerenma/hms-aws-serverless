export interface Admission {
    id?: number;
    patients_id?: string;
    admission_date: string;
    discharged_date: string;
}
export interface GetAdmission {
    id?: number;
    patients_id?: number;
    name: string;
    sex: string;
    dob: string;
    admission_date: string;
    discharged_date: string;
    email: string;
    phone_no: string;
    next_of_kin_name: string;
    next_of_kin_phone_no: string;
}
