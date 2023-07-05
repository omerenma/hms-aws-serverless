import { Admission, GetAdmission } from '../interface/Admission';
export declare class AdmissionModel {
    createAdmission(user: Admission): Promise<[]>;
    getAdmission(): Promise<GetAdmission[]>;
}
