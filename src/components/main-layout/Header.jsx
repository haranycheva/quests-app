import Link from "next/link";
import CoinLogo from "./CoinLogo";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ProfileLink } from "./ProfileLink";

export function Header() {
  return (
    <header className="border-b-2 border-accent-color pl-3 md:pl-5">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <CoinLogo params={{ width: 55, height: 55 }} />
        </Link>
        <ul className="flex justify-end">
          <SignedOut>
            <li className="font-semibold block p-4 text-accent-color text-xl hover:bg-accent-color hover:text-basic-color">
              <SignUpButton />
            </li>
            <li className="font-semibold block p-4 text-accent-color text-xl hover:bg-accent-color hover:text-basic-color">
              <SignInButton />
            </li>
          </SignedOut>
          <SignedIn>
            <li>
              <Link
                className="font-semibold text-[24px] block p-4 text-accent-color text-xl hover:bg-accent-color hover:text-basic-color"
                href="/create"
              >
                +
              </Link>
            </li>
            <li className="flex justify-center items-center mx-4">
              <ProfileLink />
            </li>
          </SignedIn>
        </ul>
      </nav>
    </header>
  );
}
