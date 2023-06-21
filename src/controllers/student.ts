import { Request, Response, NextFunction } from "express";
import moment from "moment";
import { findAllStudents, findStudentById, saveStudentDb } from "../services/student.service";

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

export async function getStudentById(req: Request, res: Response, next: NextFunction) {
   try {
      const id: string = req.params.id;
      const student = await findStudentById(id);
      res.status(200).json({
         student: {
            id: student?.id,
            uuid: student?.uuid,
            name: student?.name,
            title: student?.title,
            age: student?.age,
            createdAt: student?.createdAt
         }
      })
   } catch (error) {
      next(error);
   }
}

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