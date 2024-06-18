import express from "express";
import { getAnimations } from "../controllers/animationsController.js";

const router = express.Router();

router.get("/", getAnimations);

export default router;