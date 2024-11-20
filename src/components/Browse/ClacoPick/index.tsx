import { ClacoPickProps } from "@/types";
import { ClacoPickShow } from "./ClacoPickShow";
import { Swiper, SwiperSlide } from "swiper/react";

export const ClacoPick = ({ userName, picks }: ClacoPickProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col">
        <span className="headline1-bold text-grayscale-80">
          이런 공연은 어떠세요?
        </span>
        <span className="body2-semibold text-grayscale-60">
          {userName}님이 좋아할 만한 공연이에요
        </span>
      </div>

      <div className="flex justify-center overflow-x-auto">
        <Swiper
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          className="max-w-screen-sm"
        >
          {picks.map((pick, index) => (
            <SwiperSlide
              key={index}
              className="w-[114px] rounded-[5px] mr-[13.84px]"
            >
              <ClacoPickShow imageSrc={pick.imageSrc} title={pick.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
