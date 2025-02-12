import { rgbDataURL } from "@/functions/rgbDataURL";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export async function ProfileLink() {
  const user = await currentUser();
  return (
    <Link href="/profile">
      <div>
        <Image
          className="rounded-[50%]"
          width="45"
          height="45"
          src={user.imageUrl}
          alt="user picture"
          priority={false}
          placeholder="blur"
          blurDataURL={rgbDataURL(238, 238, 238)}
        />
      </div>
    </Link>
  );
}
