import { Router } from "express";
import {comprehend} from '../controller/Comprehend'


const router = Router();

router.get('/', comprehend)

export default router;