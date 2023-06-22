import { Request, Response, NextFunction } from "express";
import moment from "moment";
import { addSubjectToStudent, findAllStudents, findStudentById, findStudentSubjectsById, saveStudentDb } from "../services/student.service";
import { findSubjectById } from "../services/subject.service";

//get all students
export async function getAllStudents(req: Request, res: Response, next: NextFunction) {
   try {
      const students = await findAllStudents();
      res.status(200).json({
         students
      })
   } catch (error) {
      next(error);
   }
}

//get student by id
export async function getStudentById(req: Request, res: Response, next: NextFunction) {
   try {
      const id: number = +req.params.id;
      const student = await findStudentById(id);
      const subjects = await findStudentSubjectsById(id);
      
      res.status(200).json({
         student: {
            id: student?.id,
            uuid: student?.uuid,
            name: student?.name,
            title: student?.title,
            age: student?.age,
            createdAt: student?.createdAt,
            subjects: subjects.map(data => data.subject)
         }
      })
   } catch (error) {
      next(error);
   }
}

//get all subjects by student id
export async function getAllSubjectsStudents(req: Request, res: Response, next: NextFunction) {
   try {

   } catch (error) {
      next(error);
   }
}

// create student
export async function createStudent(req: Request, res: Response, next: NextFunction) {
   try {
      const { name, title } = req.body;
      const age = +req.body.age;

      console.log(req.body);

      await saveStudentDb(name, title, age);
      res.status(201).json({
         msg: `${name} yaratilindi`
      })
   } catch (error) {
      next(error);
   }
}

//combine subject and student
export async function combineSubjectToStudent(req: Request, res: Response, next: NextFunction) {
   try {
      const studentId = Number(req.params.id);
      const subjectId = Number(req.body.subjectId);

      await addSubjectToStudent(Number(studentId), Number(subjectId));
      await addSubjectToStudent(1, 3);
      const student = await findStudentById(+studentId);
      const subject = await findSubjectById(+subjectId);
      res.status(201).json({
         msg: `${student?.name}ga ${subject?.name} fani biriktirildi.`
      })
   } catch (error) {
      next(error);
   }
}