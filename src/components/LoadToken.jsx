"use client";

import { setAuthHeader, signInUser, signUpUser } from "@/fetch";
import { useEffect } from "react";
import localStorage from "@/functions/localStorage";

export function LoadToken({ user, token, createdAt, lastSignInAt }) {
  useEffect(() => {
    if (!user || !token) return;

    const myToken = localStorage.load("token");    
    async function handleAuth() {
      if (
        Math.floor(createdAt / 1000) ===
          Math.floor(lastSignInAt / 1000) &&
        !myToken
      ) {
        const newUser = await signUpUser(user);
        localStorage.save("token", newUser.accessToken);
      } else if (!myToken) {
        const existingUser = await signInUser(token, user.email);
        localStorage.save("token", existingUser.accessToken);
      } else{
        setAuthHeader(myToken)
      }
    }
    handleAuth();
  }, [user, token]);

  return <></>;
}
