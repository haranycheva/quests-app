import { rgbDataURL } from "@/functions/rgbDataURL";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { barrio } from "@/fonts/barrio";
import { SignOutBtn } from "@/components/profile/SignOutBtn";
import { AchivementsList } from "@/components/profile/AchivementsList";

export default async function ProfilePage() {
  const user = await currentUser();
  return (
    <div className="w-[70%] mx-auto">
      <div className="p-12  bg-basic-color rounded-[20px]">
        <div className="flex gap-[10%]">
          <Image
            className="rounded-[10%]"
            width="200"
            height="200"
            src={user.imageUrl}
            alt="user picture"
            priority={false}
            placeholder="blur"
            blurDataURL={rgbDataURL(238, 238, 238)}
          />
          <div>
            <h2
              className={`${barrio.className} text-4xl text-accent-color`}
            >
              {user.firstName} {user.lastName}
            </h2>
            <SignOutBtn />
          </div>
        </div>
      </div>
      <div className="mt-12 p-12  bg-basic-color rounded-[20px]">
        <AchivementsList achivesList={[ "registration"]}/>
      </div>
    </div>
  );
}
