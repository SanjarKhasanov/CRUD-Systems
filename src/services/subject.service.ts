import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export function findAllSubjects() {
   return prisma.subject.findMany();
}

export function saveSubject(name: string) {
   return prisma.subject.create({
      data: {
         name
      }
   })
}

export function findSubjectById(id: number) {
   return prisma.subject.findUnique({
      where: {
         id
      }
   })
}

export function findSubjectByName(name: string) {
   return prisma.subject.findUnique({
      where: {
         name
      }
   })
}