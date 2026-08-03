import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();

router.post("/users", userController.store);
router.post("/login",userController.login)

export default router;