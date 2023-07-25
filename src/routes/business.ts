import { Router } from "express";
import {addBussiness} from '../controller/Businesses'


const router = Router();

router.post("/add", addBussiness);

export default router;