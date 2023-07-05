import { Request, Response } from "express";
import { createDocotrSchema,  } from "../helpers/doctorValidation";
import { DoctorModel } from "../models/Doctors";

const user = new DoctorModel();
// Add doctor
export const createDoctor = async (req: Request, res: Response) => {
  try {
    const { error, value } = createDocotrSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { name, email, sex, dob, phone_no, specialty } = req.body;
    const data = {  name, email, sex, dob, phone_no, specialty };
     await user.addDoctor(data)
  
     return res.status(201).json({ message: "Doctor registered successfully"});
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};



// Get all doctors
export const getDoctors = async (req: Request, res: Response) => {
  try {
    const result = await user.getdoctors();
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch records" });
  }
};

// Get a single user
export const getDocotrById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await user.getUserById(parseInt(id));
    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({ message: "Failed to fetch records" });
  }
};

// Delete doctor
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await user.deleteDoctor(id);
    return res.status(200).json({
      message: `User has been deleted successfully`,
      data: result,
    });
  } catch (error: any) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

// Edit user
export const editUser = async (req: Request, res: Response) => {
  try {
    const { id, name, email, sex, dob, phone_no, specialty } = req.body;
    const result = await user.editDoctor(id, name, email, sex, dob, phone_no, specialty);
    if (result) {
     return res.status(200).json(result);
    } else {
     return res
      .status(404)
      .json({ message: "No user found for the operation" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};


