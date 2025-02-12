import Image from 'next/image';
import { barrio } from "@/fonts/barrio";
import { Ratings } from '../QuestCard/Ratings';

export const QuestInfoCard = ({ quest }) => {
  return (
    <div className="flex w-11/12 max-w-screen-md mx-auto my-3 p-3 bg-basic-color rounded-lg items-center">
      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
        <Image
          src={quest.posterImage}
          alt={quest.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="ml-3 flex justify-between flex-1">
        <div>
            <h4 className={`${barrio.className} text-2xl font-semibold text-accent-color`}>{quest.name}</h4>
            <p className="text-lg font-semibold text-accent-color" >{quest.category.toLowerCase()}</p>
        </div>
        {quest.rating ? <Ratings rating={quest.rating}/> : <></>}
      </div>
    </div>
  );
};
