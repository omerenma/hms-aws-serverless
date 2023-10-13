import {Request, Response} from 'express'
import {AxiosError} from 'axios'
import { bookAppointmentSchema } from '../helpers/bookAppointmentValidation';
import { BookAppointmentModel } from '../models/BookAppointments';

export const createAppointment = async (req:Request, res:Response) => {
  const appointment = new BookAppointmentModel()
    try {
        const { patient_id, doctor_id, appointment_date } = req.body;
        const { error, value } = bookAppointmentSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ message: error.details[0].message });
        }

        const data = { patient_id,  doctor_id, appointment_date};
        const query = await appointment.booAppointment(data);
       return res.status(201).json({ message: `An appointment has been scheduled for ${JSON.parse(data.doctor_id)} and ${data.patient_id} `, data: query });
      } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
      }
}

export const getAppointments = async (req:Request, res:Response) => {
  const appointment = new BookAppointmentModel()
  try {
    const response = await appointment.getAppointment()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({message:"Something went wrong"})
  }

}

export const getAppointmentByDoctorId = async (req:Request, res:Response) => {
    const appointment = new BookAppointmentModel()
    try {
        const {id} = req.params

        // const check = req.user
        const response = await appointment.getAppointmentByDoctorId(id)
        return res.status(200).json(response)
    } catch (error:any) {
        return error.message
    }
}