import { Request, Response, NextFunction } from 'express';
import { Data } from '../interface/Data';
interface Extended extends Request {
    info?: Data;
}
export declare const verifyToken: (req: Extended, res: Response, next: NextFunction) => Response<any, Record<string, any>> | Data;
export {};
