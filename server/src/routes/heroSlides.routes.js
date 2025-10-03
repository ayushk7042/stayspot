import express from "express";
import { getHeroSlides } from "../controllers/heroSlides.controller.js";

const router = express.Router();

router.get("/", getHeroSlides);  // GET /api/hero-slides

export default router;
