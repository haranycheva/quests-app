"use client";

import { useState, useEffect } from "react";
import { getUserInfo } from "@/fetch";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export function AddTaskBtn({ quest }) {
  const { isLoaded, isSignedIn, user } = useUser();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      getUserInfo().then((data) => {
        setUserInfo(data);
      });
    }
  }, [isLoaded, isSignedIn]);

  if (!isSignedIn || !isLoaded) return null; 
  if(userInfo?.id != quest.ownerId) return null
  return (
    <Link
      href={`/create/${quest.id}`}
      className="mt-6 inline-block px-5 py-2 rounded-lg border border-accent-color bg-accent-color text-basic-color font-semibold hover:bg-basic-color hover:text-accent-color"
    >
      Add Task
    </Link>
  );
}

