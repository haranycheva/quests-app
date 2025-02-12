"use client";

import { barrio } from "@/fonts/barrio";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import { QuestCard } from "@/components/repeated/QuestCard/QuestCard";

export function MySwiper({ questList, category }) {
  return (
    <div>
      <h3
        className={`${barrio.className}  text-accent-color md:text-8xl  text-6xl lg:ml-[20px] lg:mt-0 mt-[10px]`}
      >
        {category}
      </h3>
      <div className="flex justify-center items-center w-full">
        <div className="w-full max-w-[880px]">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            breakpoints={{
              768: {
                slidesPerView: 3, 
                spaceBetween: 30,
              },
            }}
          >
            {questList.map((quest) => (
              <SwiperSlide className="justify-center" key={quest.id}>
                <div className=" inline-block bg-[#eeeeee] rounded-[50px] p-8 transition ease-in-out duration-100 hover:bg-[#C6D2ED]">
                  <QuestCard quest={quest} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
