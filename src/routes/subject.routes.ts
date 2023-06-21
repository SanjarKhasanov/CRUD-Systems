import { Router } from "express";
import { createSubject, getAllSubjects } from "../controllers/subject";

const router = Router();

router.get('/', getAllSubjects)
router.post('/', createSubject);

export default router;