import express from "express";
import { PostAnswer } from '../controllers/Answers1.js'

const router = express.Router();
router.patch('/post/:id', PostAnswer)

export default router