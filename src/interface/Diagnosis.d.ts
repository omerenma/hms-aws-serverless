export interface Diagnosis {
    id?: string;
    treatment_name: string;
    drug_administered: string;
    doctor_name: string;
    patient_email: string;
    bill: string;
    date: string;
    paid: string;
    description: string;
    patient_status: string;
    issent?: number;
}
export interface UpdateDiagnosis {
    id: string;
    treatment_name?: string;
    drug_administered?: string;
    doctor_name?: string;
    patient_email?: string;
    bill?: string;
    date?: string;
    paid?: string;
    description?: string;
    patient_status?: string;
    doctor_email?: string;
    issent?: number;
}
