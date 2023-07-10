import { Router } from "express";
import {
  signin,
  signup,
  getUsers,
  deleteUser,
  getDoctors,
  getUserById,
  editUser,
} from "../controller/Users";

import { verifyToken } from "../middlewares/verifyTokens";
const router = Router();

router.post("/register", signup);
router.post("/signin", signin);
router.get("/getusers", verifyToken, getUsers);
router.get("/getuser/:id", verifyToken, getUserById);
router.get("/getdoctors", verifyToken, getDoctors);
router.delete("/user/:id", verifyToken, deleteUser);
router.put("/user", verifyToken, editUser);

export default router;
