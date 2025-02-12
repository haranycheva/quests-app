import { getQuestById } from "@/fetch";
import Image from "next/image";
import { barrio } from "@/fonts/barrio";
import { Ratings } from "@/components/repeated/QuestCard/Ratings";
import { JoinQuestBtn } from "@/components/QuestPage/JoinQuestBtn";

export default async function QuestPage({ params }) {
  const { questId } = await params;
  const quest = await getQuestById(questId);
  console.log(quest);
  const handleJoin = () => {
    alert(`Ви приєдналися до квесту "${quest.name}"!`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
        <Image
          src={quest.posterImage}
          alt={quest.name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1
        className={`${barrio.className} text-center md:text-5xl  text-4xl text-accent-color mb-4`}
      >
        {quest.name}
      </h1>
      <p className={`${barrio.className} text-xl text-accent-color mt-4`}>
        {quest.description}
      </p>

      <div className="mt-4">
        <p className="bg-accent-color text-basic-color px-3 py-1 rounded-lg text-md">
          {quest.category}
        </p>
        {quest.rating ? <Ratings rating={quest.rating} /> : <></>}
        <p className={`${barrio.className} text-xl text-accent-color mt-4`}>
          Quest level: {quest.level}
        </p>
      </div>
        <JoinQuestBtn/>
      {/* Відгуки
      <Reviews /> */}
    </div>
  );
}
