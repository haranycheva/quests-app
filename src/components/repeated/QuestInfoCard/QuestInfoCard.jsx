import Image from "next/image";
import { barrio } from "@/fonts/barrio";
import { Ratings } from "../QuestCard/Ratings";
import { rgbDataURL } from "@/functions/rgbDataURL";
import Link from "next/link";

export const QuestInfoCard = ({ quest }) => {
  return (
<Link className="w-11/12 max-w-screen-md" href={`/quests/${quest.id}`}>
        <div className="flex  p-3 bg-basic-color rounded-lg items-center">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden">
            <Image
              width="96"
              height="96"
              src={quest.posterImage}
              alt={quest.name}
              priority={false}
              placeholder="blur"
              blurDataURL={rgbDataURL(230, 230, 230)}
            />
          </div>
          <div className="ml-3 flex justify-between flex-1">
            <div>
              <h4
                className={`${barrio.className} text-2xl font-semibold text-accent-color`}
              >
                {quest.name}
              </h4>
              <p className="text-lg font-semibold text-accent-color">
                {quest.category.toLowerCase()}
              </p>
            </div>
            {quest.rating ? <Ratings rating={quest.rating} /> : <></>}
          </div>
        </div>
</Link>
  );
};
