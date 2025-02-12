"use client";

import { QuestInfoCard } from "@/components/repeated/QuestInfoCard/QuestInfoCard";
import { getUserQuest } from "@/fetch";
import { useEffect, useState } from "react";
import { barrio } from "@/fonts/barrio";

export default function UserCreatedQuestsPage() {
  const [userQuests, setUserQuests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const quests = await getUserQuest();
      setUserQuests(quests);
    }

    fetchData(userQuests);
  }, []);
  console.log(userQuests);

  return (
    <>
      <ul>
        {userQuests.length ? (
          <div>
            <h2
              className={`${barrio.className} text-center md:text-5xl  text-4xl text-accent-color`}
            >
              My quests
            </h2>
            {userQuests.map((quest) => (
              <QuestInfoCard key={quest.id} quest={quest} />
            ))}
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
