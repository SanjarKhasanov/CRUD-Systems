import { Router } from "express";
import student from './student.routes';
import subject from './subject.routes';

const router = Router();

router.use('/student', student);
router.use('/subject', subject);

export default router;