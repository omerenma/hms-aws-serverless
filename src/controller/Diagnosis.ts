import { Request, Response } from "express";
import { diagnosisSchema } from "../helpers/diagnosisVallidation";
import { DiagnosismentModel } from "../models/Diagnosis";
const diagnosis = new DiagnosismentModel();
export const createDiagnosis = async (req: Request, res: Response) => {
  try {
    const {
      bill,
      date,
      description,
      doctor_name,
      drug_administered,
      paid,
      patient_email,
      patient_status,
      treatment_name,
    } = req.body;
    const { error, value } = diagnosisSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message});
    }
    const data = {
      treatment_name,
      bill,
      date,
      description,
      doctor_name,
      drug_administered,
      paid,
      patient_email,
      patient_status,
    };
    const query = await diagnosis.addDiagnosis(data);
   return res
      .status(201)
      .json({ message: "Diagnosis successfully added", data: query });
  } catch (error:any) {
   return res.status(500).json({ message: "Something went wrong" });
  }
};

// Update Diagnosis
export const updeDiagnosis = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      bill,
      date,
      description,
      doctor_email,
      doctor_name,
      drug_administered,
      paid,
      patient_email,
      patient_status,
      treatment_name,
    } = req.body;
    const data = {
        id,
        bill,
      date,
      description,
      doctor_email,
      doctor_name,
      drug_administered,
      paid,
      patient_email,
      patient_status,
      treatment_name,
    }
    const result = await diagnosis.updateDiagnosis(data);
   return res.status(200).json({message:"Diagnosis updated successfully", data: result });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getPatientDiagnosis = async (req: Request, res: Response) => {
  try {
    const {email} = req.body
    const result = await diagnosis.getPatientDiagnosis(email)
    return res.status(200).json({data:result})
  } catch (error) {
    return res.status(500).json({message: 'Unable to fetch diagnosis result details'})
  }
}

export const getAllDiagnosis = async (req: Request, res: Response) => {
  try {
    const result = await diagnosis.getAllDiagnosis()
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({message: 'Unable to fetch diagnosis result details'})
  }
}