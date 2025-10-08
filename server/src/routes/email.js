import express from "express";
//import { subscribeEmail, contactMessage } from "../controllers/emailController.js";
import { subscribeEmail, contactMessage } from "../controllers/emailController.js";

const router = express.Router();

router.post("/subscribe", subscribeEmail);
router.post("/contact", contactMessage);

export default router;
