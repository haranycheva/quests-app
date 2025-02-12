import { TaskForm } from "@/components/createPage/TaskForm";
import { barrio } from "@/fonts/barrio";

export default function createTaskForQuestPage() {
  return (
    <div className="pt-6 pl-12">
      <h2
        className={`${barrio.className} md:text-5xl  text-4xl text-accent-color`}
      >
        Add task for quest
      </h2>
      <TaskForm />
    </div>
  );
}
