import { Request, Response } from 'express';
export declare const createAppointment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAppointments: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAppointmentByDoctorId: (req: Request, res: Response) => Promise<any>;
