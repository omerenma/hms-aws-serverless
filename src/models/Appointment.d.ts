import { Appointment } from '../interface/Appointment';
export declare class AppointmentModel {
    addAppointment(user: Appointment): Promise<[]>;
    getAppointment(): Promise<Appointment[]>;
}
