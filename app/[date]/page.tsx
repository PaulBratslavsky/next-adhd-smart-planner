import { find } from "@/database/models/calendar";
import { Card } from "@/components/ui/card";
import InitializeDayForm from "@/components/custom/InitializeDayForm";

interface ParamsProps {
  readonly params: {
    date: string;
  };
}

async function loadDateData(date: string) {
  return await find(date);
}

export default async function DynamicDateRoute({ params }: ParamsProps) {
  const data = await loadDateData(params.date);
  console.log(params.date, "date");

  if (!data) return <InitializeDayForm date={params.date}/>;

  return (
    <Card className="p-4 w-full min-h-[calc(100vh-2rem)]">
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.tasks &&
          data.tasks.map((task) => {
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
