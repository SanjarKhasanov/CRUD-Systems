import { Router } from "express";
import { getAllStudents, createStudent, getStudentById, combineSubjectToStudent } from "../controllers/student";

const router = Router();

router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.post('/:id/add-subject', combineSubjectToStudent);
// router.get('/:id/subjects', getStudentSubjects);

router.post('/', createStudent);

export default router;