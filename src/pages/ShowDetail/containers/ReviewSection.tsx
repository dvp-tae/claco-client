import { ReviewSummaryCard } from "@/components/ShowDetail/ReviewSummaryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { forwardRef } from "react";

const ReviewSection = forwardRef<HTMLDivElement>((_, ref) => {
  const reviews = [
    {
      username: "울랄라",
      rating: 4.0,
      reviewSummaryContent: "집 근처에서 공연하길래 보고 왔는데 너무 좋았어요!",
    },
    {
      username: "울랄라",
      rating: 4.0,
      reviewSummaryContent: "집 근처에서 공연하길래 보고 왔는데 너무 좋았어요!",
    },
    {
      username: "울랄라",
      rating: 4.0,
      reviewSummaryContent: "집 근처에서 공연하길래 보고 왔는데 너무 좋았어요!",
    },
    {
      username: "울랄라",
      rating: 4.0,
      reviewSummaryContent: "집 근처에서 공연하길래 보고 왔는데 너무 좋았어요!",
    },
    {
      username: "울랄라",
      rating: 4.0,
      reviewSummaryContent: "집 근처에서 공연하길래 보고 왔는데 너무 좋았어요!",
    },
  ];

  return (
    <section ref={ref}>
      <div className="px-6 pb-[86px]">
        <div className="space-x-[14px] mb-6">
          <span className="headline2-bold text-grayscale-80">감상 리뷰</span>
          <a
            href="/show/1/reviews"
            className="caption-12 text-grayscale-60 underline"
          >
            전체 보기
          </a>
        </div>

        <Swiper
          spaceBetween={12}
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          className="max-w-screen-sm"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="w-[194px]">
              <ReviewSummaryCard
                username={review.username}
                rating={review.rating}
                reviewSummaryContent={review.reviewSummaryContent}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
});

export default ReviewSection;
