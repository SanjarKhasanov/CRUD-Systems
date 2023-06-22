import { Router } from "express";
import { createSubject, getAllSubjects, getSubjectById } from "../controllers/subject";

const router = Router();

router.get('/', getAllSubjects);
router.get('/:id', getSubjectById);

router.post('/', createSubject);

export default router;