import { Request, Response } from "express";
export declare const createAdmission: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAdmission: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
