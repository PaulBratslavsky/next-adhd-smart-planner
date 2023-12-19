import prisma from "@/database/prisma";

export async function getCalendarDayData(date: string) {
  const entry = await prisma.calendarDay.findMany({
    where: { date: date },
    include: {
      Task: {
        orderBy: { createdAt: "asc" },
        include: {
          TaskItem: {
            orderBy: { createdAt: "asc" },
          },
        },
      },
    },
  });
  return entry[0];
}

