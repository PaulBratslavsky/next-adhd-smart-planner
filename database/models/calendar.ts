import prisma from "@/database/prisma";
import { CalendarDay } from "@prisma/client";

export async function find(date: string) {
  const entry = await prisma.calendarDay.findMany({
    where: { date: date },
    include: {
      tasks: {
        orderBy: { createdAt: "asc" },
        include: {
          taskItems: {
            orderBy: { createdAt: "asc" },
          },
        },
      },
    },
  });
  return entry[0];
}

export async function create(date: string) {
  const entry = await prisma.calendarDay.create({
    data: { date: date } as CalendarDay
  });
  return entry;
}

