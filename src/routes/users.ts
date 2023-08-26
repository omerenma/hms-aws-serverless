import { Router } from "express";
import {
  signin,
  signup,
  getSession,
  getUsers,
  deleteUser,
  getDoctors,
  getUserById,
  editUser,
  logout
} from "../controller/Users";

import { verifyToken } from "../middlewares/verifyTokens";
import { requireUser } from "../middlewares/requireUser";
const router = Router();

router.post("/register", signup);
router.post("/signin", signin);
 router.get('/session', requireUser, getSession)
router.delete('/logout', requireUser,logout)
router.get("/getusers", requireUser, getUsers);
router.get("/getuser/:id", requireUser, getUserById);
router.get("/getdoctors", requireUser, getDoctors);
router.delete("/user/:id", requireUser, deleteUser);
router.put("/user", requireUser, editUser);

export default router;
