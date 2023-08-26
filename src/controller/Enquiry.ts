import {Request, Response} from 'express'
import { enquirySchema } from '../helpers/enquiryValidation';
import { EnquiryModel } from '../models/AddEnquiry';

export const createEnquiry = async (req:Request, res:Response) => {
  const enquiry = new EnquiryModel()
    try {
        const { name,email, message, } = req.body;
        const { error, value } = enquirySchema.validate(req.body);
        if (error) {
          return res.status(400).json({ message: error.details[0].message });
        }
        const data = { name, email, message};
        const query = await enquiry.addEnquiry(data);
        return res.status(201).json({ message: `Message successfully sent` });
      } catch (error:any) {
        return res.status(500).json({ message: "Something went wrong...", error });
      }
}