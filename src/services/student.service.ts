import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export function findAllStudents() {
   return prisma.student.findMany();
}

export function findStudentById(id: string) {
   return prisma.student.findUnique({
      where: {
         uuid: id
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