import { Request, Response } from 'express';
export declare const createAppointment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAppointment: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
