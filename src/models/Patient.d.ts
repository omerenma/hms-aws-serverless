import { Patient, UpdatePatient } from "../interface/Patient";
export declare class PatientModel {
    addPatient(user: Patient): Promise<{
        message: string;
    }>;
    deletePatient(id: string): Promise<Patient>;
    editPatient(user: UpdatePatient): Promise<UpdatePatient>;
    getPatients(): Promise<Patient[]>;
    getPatientsById(id: string): Promise<Patient>;
}
