import { getCalendarDayData } from "@/database/models/calendar-days";

interface ParamsProps {
  readonly params: {
    date: string;
  }
}

async function loadDateData(date: string) {
  return await getCalendarDayData(date);
}

export default async function DynamicDateRoute({ params }: ParamsProps) {
  const data = await loadDateData(params.date);
  return (
    <div>
      <h1>Dynamic Date Route</h1>
      <p>params: {params.date}</p>
      <p>data: {JSON.stringify(data)}</p>
    </div>
  );
}
