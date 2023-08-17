import { Router } from "express";
import {addBussiness, verifyBussiness} from '../controller/Businesses'


const router = Router();

router.post("/add", addBussiness);
router.get('/verify/:token', verifyBussiness)

export default router;