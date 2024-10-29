import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as X } from "@/assets/svgs/X-icon.svg";
import { CategoryTag } from "@/components/common/CategoryTag";
import { ReviewCard } from "@/components/Review/ReviewCard";
import { REVIEW_MOCK_DATA } from "@/components/Review/ReviewCard/const";
import { ReviewCardType } from "@/types";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const options: string[] = ["별점 높은 순", "별점 낮은 순", "최신 순"];

export const ReviewPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>(options[0]);
  const [isThumbnailShow, setIsThumbnailShow] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [previewData, setPreviewData] = useState<ReviewCardType>({
    reviewId: 0,
    profileImage: "",
    reviewImageList: [""],
    nickName: "",
    starRating: "",
    reviewContent: "",
    location: "",
    locationReview: [""],
    date: "",
    likeCount: "",
  });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const gotoBack = () => {
    navigate(-1);
  };

  const previewImage = (review: ReviewCardType) => {
    setIsThumbnailShow((prev) => !prev);
    setPreviewData(review);
  };

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
              initialSlide={0}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Thumbs]}
              className="mb-11"
            >
              {previewData.reviewImageList.map((image, index) => (
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
                {previewData.reviewImageList.map((image, index) => (
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
        <section className="flex-col space-y-[10px] mb-[3px]">
          <div className="flex space-x-2">
            <CategoryTag categoryType="dance">무용</CategoryTag>
            <CategoryTag categoryType="ongoing">공연 중</CategoryTag>
          </div>
          <div className="flex-col">
            <div className="heading2-bold">
              유니버설발레단 〈호두까기 인형〉 - 성남
            </div>
            <div className="body2-medium text-grayscale-60">리뷰 184개</div>
          </div>
        </section>
        <section>
          <div
            ref={dropdownRef}
            className="relative flex items-center justify-end w-[80px] ml-auto space-x-2 cursor-pointer text-common-white mb-[19px]"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="caption-13">{selectOption}</div>
            <BackArrow
              width="4"
              height="8"
              viewBox="0 0 11 20"
              className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90" : "-rotate-90"} `}
            />
            <div
              className={`absolute top-6 bg-grayscale-10 py-[10px] px-5 rounded-[5px] transition-all duration-300 ease-in-out ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
              {isOpen ? (
                <ul className="text-center caption-13 space-y-[12px] w-[65px]">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => setSelectOption(option)}
                      className={`${selectOption === option ? "text-common-white" : "text-grayscale-60"}`}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
          <div className="flex-col space-y-[11px] pb-[100px]">
            {REVIEW_MOCK_DATA.map((review) => (
              <ReviewCard
                key={review.reviewId}
                review={review}
                onClick={() => previewImage(review)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
