"use client";

import { getUserInfo } from "@/fetch";
import { useEffect, useState } from "react";
import { barrio } from "@/fonts/barrio";
import { QuestCompletedCard } from "@/components/QuestPage/QuestCompetedCard";

export default function UserCompletedQuestsPage() {
  const [userQuests, setUserQuests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const {quests} = await getUserInfo();
      setUserQuests(quests);
      console.log(quests);
    }

    fetchData();
  }, []);

  return (
    <>
      <ul>
        {userQuests.length ? (
          <div>
            <h2
              className={`${barrio.className} text-center md:text-5xl  text-4xl text-accent-color mb-4`}
            >
              Quests in progress
            </h2>
            <ul className="flex flex-col gap-8">
              {userQuests.map(({quest}) => (
                <li className="flex gap-1/12 justify-center" key={quest.id}>
                  <QuestCompletedCard quest={quest} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p
            className={`${barrio.className} md:text-5xl  text-4xl text-accent-color ml-4`}
          >
            You haven`t joined to any quests yet
          </p>
        )}
      </ul>
    </>
  );
}
