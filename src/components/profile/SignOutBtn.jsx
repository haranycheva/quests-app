"use client";

import localStorage from "@/functions/localStorage";
import { useAuth } from "@clerk/nextjs";

export function SignOutBtn() {
  const { signOut } = useAuth();
  return (
    <button
      className="hover:bg-basic-color border-accent-color border-[1px] hover:text-accent-color rounded-[15px] p-4 text-basic-color bg-accent-color"
      type="button"
      onClick={() => {
        localStorage.save("token", "");
        signOut();
      }}
    >
      Sign Out
    </button>
  );
}
