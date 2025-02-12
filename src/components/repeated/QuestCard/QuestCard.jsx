import Link from "next/link";
import { Ratings } from "./Ratings";
import Image from "next/image";

export function QuestCard({ quest }) {
  return (
    <Link className="block" href="#">
      <div className="flex items-center flex-col">
        <div className="w-[208px] h-[278px] relative">
          <Image
            src={quest.posterImage}
            alt="poster"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h4 className="text-[#011627] font-inter text-xl">{quest.name}</h4>
        {quest.rating && <Ratings rating={quest.rating} />}
      </div>
    </Link>
  );
}
