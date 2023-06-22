import { Request, Response, NextFunction } from "express";
import { findAllSubjects, findSubjectById, saveSubject } from "../services/subject.service";

export async function getAllSubjects(req: Request, res: Response, next: NextFunction) {
   try {
      const subjects = await findAllSubjects();
      res.status(200).json({
         subjects
      })
   } catch (error) {
      next(error);
   }
}

export async function createSubject(req: Request, res: Response, next: NextFunction) {
   try {
      const name = req.body.name;
      const subject = await saveSubject(name);
      res.status(201).json({
         msg: `${name} fani qo'shildi!`,
         subject
      })
   } catch (error) {
      next(error);
   }
}

export async function getSubjectById(req: Request, res: Response, next: NextFunction) {
   const id = +req.params.id;
   const subject = await findSubjectById(id);
   res.status(200).json({
      subject
   })
}