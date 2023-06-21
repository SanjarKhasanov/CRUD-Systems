import { Router } from "express";
import { getAllStudents, createStudent, getStudentById } from "../controllers/student";

const router = Router();

router.get('/', getAllStudents);
router.get('/:id', getStudentById);

router.post('/', createStudent);

export default router;