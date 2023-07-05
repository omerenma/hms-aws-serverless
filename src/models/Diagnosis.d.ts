import { Diagnosis, UpdateDiagnosis } from "../interface/Diagnosis";
export declare class DiagnosismentModel {
    addDiagnosis(data: Diagnosis): Promise<Diagnosis>;
    updateDiagnosis(user: UpdateDiagnosis): Promise<UpdateDiagnosis>;
    getPatientDiagnosis(email: string): Promise<Diagnosis>;
    getAllDiagnosis(): Promise<Diagnosis[]>;
}
