import { QuestForm } from "@/components/createPage/QuestForm";
import { barrio } from "@/fonts/barrio";

export default function CreateQuestPage() {
  return (
    <div className="pt-6 pl-12">
    <h2 className={`${barrio.className} md:text-5xl  text-4xl text-accent-color`}>Create your quest</h2>
      <QuestForm />
    </div>
  );
}
