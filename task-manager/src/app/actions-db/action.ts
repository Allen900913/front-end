import { prisma } from "../prisma-client";

export async function getTasks(userId: string) {
  return prisma.task.findMany({
    where: { userId },
    orderBy: { id: "asc" },
  });
}

export async function addTask(title: string, userId: string) {
  return prisma.task.create({
    data: { title, userId },
  });
}

export async function deleteTask(id: number) {
  return prisma.task.delete({
    where: { id },
  });
}

export async function editTask(id: number, title: string) {
  return prisma.task.update({
    where: { id },
    data: { title },
  });
}
