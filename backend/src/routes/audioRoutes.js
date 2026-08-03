import { Router } from "express";
import audioController from "../controllers/audioController.js";
import  upload  from "../config/multer.js";


const router = Router();

router.get("/", audioController.index);
router.post("/", upload.single("audio"), audioController.store);


export default router;