"use client";

import { QuestInfoCard } from "@/components/repeated/QuestInfoCard/QuestInfoCard";
import { deleteQuestById, getUserQuest } from "@/fetch";
import { useEffect, useState } from "react";
import { barrio } from "@/fonts/barrio";
import { DeleteQuestButton } from "@/components/repeated/QuestInfoCard/DeleteQuestBtn";

export default function UserCreatedQuestsPage() {
  const [userQuests, setUserQuests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const quests = await getUserQuest();
      setUserQuests(quests);
      console.log(quests);
      
    }

    fetchData(userQuests);
  }, []);

  const handleDelete = async (id) => {
    const res = await deleteQuestById(id)
    setUserQuests(userQuests.filter((quest) => quest.id != id))
    console.log(res);
  };


  return (
    <>
      <ul>
        {userQuests.length ? (
          <div>
            <h2
              className={`${barrio.className} text-center md:text-5xl  text-4xl text-accent-color mb-4`}
            >
              My quests
            </h2>
            <ul className="flex flex-col gap-8">
                {userQuests.map((quest) => (
                  <li className="flex gap-1/12 justify-center" key={quest.id}>
                    <QuestInfoCard quest={quest} />
                    <DeleteQuestButton onDelete={handleDelete} questId={quest.id}/>
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          <p
            className={`${barrio.className} md:text-5xl  text-4xl text-accent-color ml-4`}
          >
            You haven`t created any quests yet
          </p>
        )}
      </ul>
    </>
  );
}
