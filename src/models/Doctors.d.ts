import { Users } from '../utils/types';
interface Doctors {
    name: string;
    email: string;
    sex: string;
    phone_no: string;
    dob: string;
    specialty: string;
}
export declare class DoctorModel {
    addDoctor(data: Doctors): Promise<{
        message: string;
    }>;
    getdoctors(): Promise<Doctors[]>;
    getUserById(id: number): Promise<Users[]>;
    deleteDoctor(id: string): Promise<Doctors>;
    editDoctor(id: string, name?: string, email?: string, sex?: string, dob?: string, phone_no?: string, specialty?: string): Promise<[]>;
}
export {};
