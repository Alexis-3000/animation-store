import express from "express";
import { getAnimations } from "../controllers/animationsController.js";

const router = express.Router();

router.get("/", getAnimations);
/* router.get("/:id", addToCart); */

export default router;