import { Request, Response } from "express";
import { PatientModel } from "../models/Patient";
import { patientSchema } from "../helpers/patientValidation";

const patient = new PatientModel();
export const createPatient = async (req: Request, res: Response) => {

  try {
    const { error, value } = patientSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { name, dob,sex,residential_address ,email,phone_no,next_of_kin_name,next_of_kin_phone} = req.body;
   
    const data = {name,dob,sex,email,residential_address ,phone_no,next_of_kin_name,next_of_kin_phone,} 

    const result = await patient.addPatient(data);
    return res.status(201).json({ message: "Patient added successfully", data: result });
  } catch (error:any) {
    return res.json({ message: error.message});
  }
};

// Delete Patient
export const deletePatient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await patient.deletePatient(id);
     res
      .status(200)
      .json({ message: "Patient deleted successfully", data: result });
  } catch (error) {
     res.status(500).json({ message: "Something went wrong" });
  }
};

// Edit Patient
export const editPatient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, dob,sex,residential_address ,email,phone_no,next_of_kin_name,next_of_kin_phone} = req.body;
    const data = {name,sex,dob,residential_address ,email, phone_no,next_of_kin_name,next_of_kin_phone, id} 
    const result = await patient.editPatient(data);
    if(result){
      return res.status(200).json({message:"Record updated successfully", data: result });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getPatients = async (req:Request, res:Response) => {
    try {
        const result = await patient.getPatients()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({error})
    }
}

export const getPatientsById = async (req:Request, res:Response) => {
  try {
    const {id} = req.params
      const result = await patient.getPatientsById(id)
      return  res.status(200).json(result)
  } catch (error) {
      return res.status(500).json({error})
  }
}


export const deletePatientsById = async (req:Request, res:Response) => {
  try {
    const {id} = req.params
      const result = await patient.deletePatient(id)
      return  res.status(200).json(result)
  } catch (error) {
      return res.status(500).json({error})
  }
}