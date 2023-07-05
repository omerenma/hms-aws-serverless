import { Request, Response } from "express";
export declare const createDoctor: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getDoctors: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getDocotrById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const editUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
