import { Request, Response } from "express";
import { AdmissionModel } from "../models/Admission";
import { admissionSchema } from "../helpers/admissionValidation";
import { json } from "body-parser";

export const createAdmission = async (req: Request, res: Response) => {
  const admission = new AdmissionModel();
  try {
    const { patients_id, admission_date, discharged_date } = req.body;
    const { error, value } = admissionSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const data = { patients_id, admission_date, discharged_date };
    const query = await admission.createAdmission(data);
   return res
      .status(201)
      .json({ message: `Patient has been admitted `, data: query });
  } catch (error) {
   return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getAdmission = async (_req: Request, res: Response) => {
  const admission = new AdmissionModel();
  try {
    const response = await admission.getAdmission();
    return res.status(200).json(response);
  } catch (error) {
   return res.status(500).json({ message: "Something went wrong" });
  }
};
