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