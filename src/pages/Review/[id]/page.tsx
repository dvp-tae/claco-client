import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as Like } from "@/assets/svgs/Like.svg";
import { ReactComponent as Star } from "@/assets/svgs/StarRating.svg";
import { ReactComponent as X } from "@/assets/svgs/X-icon.svg";
import { ReviewTag } from "@/components/common/ReviewTag";
import { REVIEW_MOCK_DATA } from "@/components/Review/ReviewCard/const";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ReviewDetailPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isThumbnailShow, setIsThumbnailShow] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [selectIndex, setSelectIndex] = useState<number>(0);

  const navigate = useNavigate();

  const gotoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (isThumbnailShow) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setIsAnimating(true);
      }, 50);
    } else {
      document.body.style.overflow = "unset";
      setIsAnimating(false);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isThumbnailShow]);

  const handleImageClick = () => {
    if (isThumbnailShow) {
      setIsAnimating(false);
      setTimeout(() => {
        setIsThumbnailShow(false);
      }, 300);
    } else {
      setIsThumbnailShow(true);
    }
  };

  return (
    <div className="relative">
      {(isThumbnailShow || isAnimating) && (
        <>
          <div
            className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
              ${isAnimating ? "opacity-100" : "opacity-0"}`}
            onClick={handleImageClick}
          />
          <div
            className={`fixed inset-x-0 bottom-0 z-50 bg-dark transition-transform duration-300 ease-out
              h-[calc(100%-100px)]
              ${isAnimating ? "translate-y-0" : "translate-y-full"}`}
          >
            <Swiper
              loop={true}
              spaceBetween={10}
              initialSlide={selectIndex}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Thumbs]}
              className="mb-11"
            >
              {REVIEW_MOCK_DATA[4].reviewImageList.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative">
                    <X
                      className="absolute top-5 left-5 max-[375px]:left-14"
                      onClick={handleImageClick}
                    />
                    <img
                      src={image}
                      alt="리뷰 이미지"
                      className="object-contain w-screen max-[375px]:h-[400px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="px-6 thumbnail">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
              >
                {REVIEW_MOCK_DATA[4].reviewImageList.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt="리뷰 이미지"
                      className="h-[90px] w-[90px]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </>
      )}
      <div className="pt-[60px] px-6">
        <section className="relative flex justify-center mb-[53px]">
          <BackArrow onClick={gotoBack} className="absolute left-0" />
          <div className="headline2-bold">리뷰</div>
        </section>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-[10px]">
            <img
              src={REVIEW_MOCK_DATA[4].profileImage}
              alt="프로필 이미지"
              className="object-fill w-8 h-8 rounded-full"
            />
            <div className="headline2-bold">{REVIEW_MOCK_DATA[4].nickName}</div>
            <div className="flex items-center space-x-1 ml-[3px]">
              <Star />
              <div className="body2-medium text-secondary2-100/100">
                {REVIEW_MOCK_DATA[4].starRating}
              </div>
            </div>
          </div>
          <div>
            <div className="caption-12 text-grayscale-50">
              {REVIEW_MOCK_DATA[4].date}
            </div>
          </div>
        </div>
        <div className="mb-4 body2-medium">
          {REVIEW_MOCK_DATA[4].reviewContent}
        </div>
        <div className="flex space-x-[11px] mb-[35px] overflow-scroll scrollbar-hide">
          {REVIEW_MOCK_DATA[4].reviewImageList.map((image, index) => (
            <img
              onClick={() => {
                handleImageClick();
                setSelectIndex(index);
              }}
              key={index}
              src={image}
              alt="리뷰 이미지"
              className="min-w-[90px] max-h-[90px] rounded-[5px]"
            />
          ))}
        </div>
        <div className="mb-12">
          <div className="body2-medium mb-[15px]">공연 특징</div>
          <div className="flex flex-wrap justify-start gap-x-2 gap-y-4">
            <ReviewTag>웅장한</ReviewTag>
            <ReviewTag>섬세한</ReviewTag>
            <ReviewTag>고전적인</ReviewTag>
            <ReviewTag>현대적인</ReviewTag>
            <ReviewTag>서정적인</ReviewTag>
            <ReviewTag>역동적인</ReviewTag>
            <ReviewTag>낭만적인</ReviewTag>
            <ReviewTag>비극적인</ReviewTag>
            <ReviewTag>친숙한</ReviewTag>
            <ReviewTag>새로운</ReviewTag>
          </div>
        </div>
        <div className="mb-[30px]">
          <div className="flex items-center justify-start space-x-2 mb-[15px]">
            <div className="body2-semibold">공연장</div>
            <div className="text-[12px] font-medium leading-normal tracking-[-0.02em] text-[#8A8585]">
              {REVIEW_MOCK_DATA[4].location}
            </div>
          </div>
          <div className="flex flex-wrap justify-start gap-x-2 gap-y-4">
            {REVIEW_MOCK_DATA[4].locationReview.map((lReview, index) => (
              <ReviewTag key={index} isPlace={true}>
                {lReview}
              </ReviewTag>
            ))}
          </div>
        </div>
        <div className="pb-[170px]">
          <div
            className={`flex items-center space-x-1 ${isLiked ? "text-secondary2-100" : "text-grayscale-60"}`}
            onClick={() => setIsLiked((prev) => !prev)}
          >
            <Like />
            <span className="body2-medium">
              {REVIEW_MOCK_DATA[4].likeCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
