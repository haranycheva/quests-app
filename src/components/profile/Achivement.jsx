import { rgbDataURL } from "@/functions/rgbDataURL";
import Image from "next/image";
import { barrio } from "@/fonts/barrio";

export function Achivement({ achive }) {
  return (
    <li className="bg-accent-color w-[350px] rounded-[25px] p-4">
      <h5 className={`${barrio.className} text-[17px] text-basic-color`}>
        {achive.title}
      </h5>
      <div className="flex gap-2 items-center">
        <div className="bg-basic-color p-1 rounded-[5px]">
          <Image
            className=""
            width="60"
            height="60"
            src={achive.pic}
            alt="achievement picture"
            priority={false}
            placeholder="blur"
            blurDataURL={rgbDataURL(238, 238, 238)}
          />
        </div>
        <div className="py-4 border-black border-y-[2px]">
          <p className={`${barrio.className} text-[16px] text-basic-color`}>
            {achive.description}
          </p>
        </div>
      </div>
    </li>
  );
}
