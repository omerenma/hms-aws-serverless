import {Request, Response} from 'express'
import { appointmentSchema } from '../helpers/appointmentVallidation';
import { AppointmentModel } from '../models/Appointment';
import sendEmail from '../notifications/EmailService'
export const createAppointment = async (req:Request, res:Response) => {
  const appointment = new AppointmentModel()
    try {
        const { patient_id, doctor_id, appointment_date, business_id} = req.body;
        const { error, value } = appointmentSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ message: error.details[0].message });
        }
        const data = { patient_id, doctor_id, appointment_date, business_id};
        const query:any = await appointment.addAppointment(data);

       
       
        // TODO => send email notification to the doctor and patience informing them about the appointment

        let messageoptions = {
          from: process.env.EMAIL_SMTP_USER,
          to: query && query.email,
          subject: `Appointment has been scheduled for ${query && query.email} with ${query && query.patient_email} at ${query && query.appointment_date}`,
          // html: data,
         }
  try {
    await sendEmail(messageoptions)
  } catch (error:any) {
    throw new Error(error)
    
  }  return res.status(201).json({ message: `An appointment has been scheduled with ${query && query.email} and ${query && query.patient_email} `, data: query });
      } catch (error:any) {
        return res.status(500).json({ message: "Something went wrong...", error });
      }
}

export const getAppointment = async (_req:Request, res:Response) => {
  const appointment = new AppointmentModel()
  try {
    const response = await appointment.getAppointment()
    return res.status(200).json(response)
  } catch (error:any) {
    return error
  }

}

export const getDoctorAppointmentById = async (req:Request, res:Response) => {
  const appointment = new AppointmentModel()
  try {
    const id = req.params.id
    const response = await appointment.getAppointmentByDoctorId(id)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({message:"Something went wrong", error})
  }

}