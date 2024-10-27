import { Swiper, SwiperSlide } from "swiper/react";
import { VerticalInfoCard } from "@/components/Main/InformationCard";
import Poster6 from "@/assets/images/poster6.gif";
import Poster9 from "@/assets/images/poster9.gif";
import Poster11 from "@/assets/images/poster11.gif";
import { forwardRef } from "react";

const RelatedShowsSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref}>
      <div className="px-6 pb-[161px]">
        <span className="headline2-bold text-grayscale-80">비슷한 공연</span>
        <section className="mt-6">
          <Swiper
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            className="max-w-screen-sm"
          >
            <SwiperSlide className="w-[231px]">
              <VerticalInfoCard
                image={Poster6}
                title={"라 바야데르"}
                location={"예술의 전당 오페라 극장"}
                date={"2024.11.30(토) 5PM"}
              />
            </SwiperSlide>
            <SwiperSlide className="w-[231px]">
              <VerticalInfoCard
                image={Poster9}
                title={"피터팬"}
                location={"예술의 전당 오페라 극장"}
                date={"2024.11.30(토) 5PM"}
              />
            </SwiperSlide>
            <SwiperSlide className="w-[231px]">
              <VerticalInfoCard
                image={Poster11}
                title={"The Night In NewYork"}
                location={"예술의 전당 오페라 극장"}
                date={"2024.11.30(토) 5PM"}
              />
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </section>
  );
});

export default RelatedShowsSection;
