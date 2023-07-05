import { Request, Response } from "express";
export declare const createDiagnosis: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updeDiagnosis: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getPatientDiagnosis: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllDiagnosis: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
