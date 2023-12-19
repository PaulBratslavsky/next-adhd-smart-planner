import { getCalendarDayData } from "@/database/models/calendar-days";
import { Card } from "@/components/ui/card";

interface ParamsProps {
  readonly params: {
    date: string;
  };
}

async function loadDateData(date: string) {
  return await getCalendarDayData(date);
}

export default async function DynamicDateRoute({ params }: ParamsProps) {
  const data = await loadDateData(params.date);

  if (!data) return <h2>Add Initialize Day Form Here</h2>

  return (
    <Card className="p-4 w-full min-h-[calc(100vh-2rem)]">
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.Task &&
          data.Task.map((task) => {
            return (
              <Card className="p-2" key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </Card>
            );
          })}
      </div>
    </Card>
  );
}
