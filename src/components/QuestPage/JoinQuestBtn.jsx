"use client";

import { checkIfJoined, getUserInfo, joinQuest } from "@/fetch";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export function JoinQuestBtn({ quest }) {
  const { isLoaded, isSignedIn } = useUser();
  const [userInfo, setUserInfo] = useState(null);
  const [wasJoined, setJoined] = useState(true);
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      getUserInfo().then((data) => {
        setUserInfo(data);
      });
    }
  }, [isLoaded, isSignedIn]);

  useEffect(() => {
    if (isSignedIn) {
      checkIfJoined(quest.id).then((data) => {
        setJoined(data);
      });
    }
  }, [userInfo]);

  const handleJoin = async() => {
    const joined = await joinQuest(quest.id)
    setJoined(true)
    console.log(joined);
    
  }

  if (!isSignedIn || !isLoaded) return null;
  if (userInfo?.id == quest.ownerId) return null;
  if (wasJoined) return null;
  return (
    <button onClick={() => handleJoin()} className=" bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition">
      Join
    </button>
  );
}
