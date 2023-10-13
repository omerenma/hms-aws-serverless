import {Request, Response} from 'express'
import { DoctorRemarkModel } from '../models/AddDoctorRemark';
import { doctorRemarkSchema } from '../helpers/doctorRemark';

export const createDoctorRemark = async (req:Request, res:Response) => {
  const remark = new DoctorRemarkModel()
    try {
        const {doctor_id, name,email, phone_no, message, } = req.body;
        const { error, value } = doctorRemarkSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ message: error.details[0].message });
        }
        const data = {doctor_id, name, email, phone_no, message};
        const query = await remark.addEnquiry(data);
        return res.status(201).json({ message: `Remark successfully added` });
      } catch (error:any) {
        return res.status(500).json({ message: "Something went wrong...", error });
      }
}