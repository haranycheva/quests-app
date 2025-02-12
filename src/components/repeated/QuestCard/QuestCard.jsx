import Link from "next/link";
import { Ratings } from "./Ratings";
import Image from "next/image";

export function QuestCard({ quest}) {
  return (
    <Link className="block" href="#">
        <div className="flex items-center flex-col">
            <Image
              width="208"
              height="278"
              src={quest.photo}
              alt="poster"
              className="w-52 h-62"
            />
            <h4 className="text-[#011627] font-inter text-xl">
              {quest.name}
            </h4>
            <Ratings rating={quest.rating}/>
        </div>
    </Link>
  );
}
