import Link from "next/link";
import { linkClasses } from "./classes";

export default function ProfileLayout({ children }) {
  return (
    <div className="flex min-h-screen h-[100%]">
      <ul className="pt-14 border-r-2 border-accent-color">
        <li>
          <Link
            href="/profile"
            className={linkClasses}
          >
          Profile
          </Link>
          <Link
            href="/profile/created"
            className={linkClasses}
          >
          Created Quests
          </Link>
          <Link
            href="/profile/completed"
            className={linkClasses}
          >
          Completed Quests
          </Link>
        </li>
      </ul>
      <div className="flex-1 pt-16">{children}</div>
    </div>
  );
}
