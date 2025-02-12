import { TaskList } from "@/components/QuestPage/TaskList";
import { getQuestById, getQuestTasks } from "@/fetch";
import Link from "next/link";
import { barrio } from "@/fonts/barrio";
import { currentUser } from "@clerk/nextjs/server";
import { AddTaskBtn } from "@/components/QuestPage/AddTaskBtn";

export default async function QuestTasksPage({ params }) {
  const { questId } = await params;
  const quest = await getQuestById(questId);
  const tasks = await getQuestTasks(questId);

  return (
    <div className="pt-20 pl-10">
      <h2
        className={`${barrio.className} md:text-5xl  text-4xl text-accent-color`}
      >
        Task list: {quest.name}
      </h2>
      <TaskList tasks={tasks} />
      <AddTaskBtn quest={quest} />
    </div>
  );
}
