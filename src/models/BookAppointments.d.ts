import { Appointment } from '../interface/Appointment';
interface AppointmentData {
    patient_id: string;
    doctor_id: string;
    appointment_date: string;
}
export declare class BookAppointmentModel {
    booAppointment(user: AppointmentData): Promise<[]>;
    getAppointment(): Promise<Appointment[]>;
    getAppointmentByDoctorId(id: string): Promise<{}>;
}
export {};
