import {Request, Response} from 'express'
import { appointmentSchema } from '../helpers/appointmentVallidation';
import { AppointmentModel } from '../models/Appointment';

export const createAppointment = async (req:Request, res:Response) => {
  const appointment = new AppointmentModel()
    try {
        const { patient_id, doctor_id, appointment_date, } = req.body;
        const { error, value } = appointmentSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ message: error.details[0].message });
        }
        const data = { patient_id, doctor_id, appointment_date};
        const query = await appointment.addAppointment(data);
        return res.status(201).json({ message: `An appointment has been scheduled with ${data.doctor_id} and ${data.patient_id} `, data: query });
      } catch (error) {
        return res.status(500).json({ message: "Something went wrong...", error });
      }
}

export const getAppointment = async (_req:Request, res:Response) => {
  const appointment = new AppointmentModel()
  try {
    const response = await appointment.getAppointment()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({message:"Something went wrong"})
  }

}

