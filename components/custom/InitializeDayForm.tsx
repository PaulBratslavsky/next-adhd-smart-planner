import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { initializeDayAction } from "@/actions/initialize-day-action";

export default function InitializeDayForm({ date }: { date: string }) {
  return (
    <form action={initializeDayAction}>
      <Card className="flex justify-center items-center h-96">
        <input type="hidden" name="date" value={date} />
        <Button type="submit" disabled={false}>
          Create Task
        </Button>
      </Card>
    </form>
  );
}
