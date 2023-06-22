import { PrismaClient } from '@prisma/client';
import { saveSubject } from './subject.service';
const prisma = new PrismaClient();

export function findAllStudents() {
   return prisma.student.findMany();
}

export function findStudentById(id: number) {
   return prisma.student.findUnique({
      where: {
         id
      }
   })
}

export function findStudentSubjectsById(id: number) {
   return prisma.studentSubject.findMany({
      where: {
         studentId: id
      },
      include: {
         subject: true
      }
   })
}

export function addSubjectToStudent(studentId: number, subjectId: number) {
   return prisma.studentSubject.create({
      data: {
         student: {
            connect: { id: studentId }
         },
         subject: {
            connect: { id: subjectId }
         }
      }
   })
}

export function saveStudentDb(name: string, title: string, age: number) {
   return prisma.student.create({
      data: {
         name,
         title,
         age
      }
   })
}