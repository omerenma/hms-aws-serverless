import { Request, Response } from "express";
export declare const createPatient: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deletPatient: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const editPatient: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getPatients: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getPatientsById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
