import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
// import { ReactComponent as Like } from "@/assets/svgs/Like.svg";
import { ReactComponent as Star } from "@/assets/svgs/StarRating.svg";
import { ReviewTag } from "@/components/common/ReviewTag";
import { REVIEW_MOCK_DATA } from "@/components/Review/ReviewCard/const";
// import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useThumbnailModal } from "@/hooks/utils";
import { ThumbnailModal } from "@/components/common/Modal/ThumbnailModal";

export const ReviewDetailPage = () => {
  const { reviewId } = useParams<{ reviewId: string }>();
  const reviewId_ = Number(reviewId) - 1;
  const reviewList = REVIEW_MOCK_DATA[reviewId_]; // 리뷰 세부 테스트용 목데이터

  // const [isLiked, setIsLiked] = useState<boolean>(false);
  const {
    thumbsSwiper,
    isThumbnailShow,
    isAnimating,
    selectIndex,
    setThumbsSwiper,
    setSelectIndex,
    handleImageClick,
  } = useThumbnailModal();

  const navigate = useNavigate();

  const gotoBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative">
      <ThumbnailModal
        isShow={isThumbnailShow}
        isAnimating={isAnimating}
        thumbsSwiper={thumbsSwiper}
        selectIndex={selectIndex}
        images={reviewList.reviewImages.map((review) => review.imageUrl)}
        onClose={handleImageClick}
        setThumbsSwiper={setThumbsSwiper}
      />
      <div className="pt-[60px] px-6">
        <section className="relative flex justify-center mb-[53px]">
          <BackArrow onClick={gotoBack} className="absolute left-0" />
          <div className="headline2-bold">리뷰</div>
        </section>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-[10px]">
            <img
              src={reviewList.profileImage}
              alt="프로필 이미지"
              className="object-fill w-8 h-8 rounded-full"
            />
            <div className="headline2-bold">{reviewList.userName}</div>
            <div className="flex items-center space-x-1 ml-[3px]">
              <Star className="text-secondary2-100/100" />
              <div className="body2-medium text-secondary2-100/100">
                {reviewList.starRate}
              </div>
            </div>
          </div>
          <div>
            <div className="caption-12 text-grayscale-50">
              {reviewList.createdDate}
            </div>
          </div>
        </div>
        <div className="mb-4 body2-medium">{reviewList.content}</div>
        <div className="flex space-x-[11px] mb-[35px] overflow-scroll scrollbar-hide">
          {reviewList.reviewImages?.map((image, index) => (
            <img
              onClick={() => {
                handleImageClick();
                setSelectIndex(index);
              }}
              key={index}
              src={image.imageUrl}
              alt="리뷰 이미지"
              className="min-w-[90px] max-h-[90px] rounded-[5px]"
            />
          ))}
        </div>
        <div className="mb-12">
          <div className="body2-medium mb-[15px]">공연 특징</div>
          <div className="flex flex-wrap justify-start gap-x-2 gap-y-4">
            {reviewList.tagReviews.map((tag) => (
              <ReviewTag key={tag.tagCategoryId}>{tag.tagName}</ReviewTag>
            ))}
          </div>
        </div>
        <div className="mb-[30px]">
          <div className="flex items-center justify-start space-x-2 mb-[15px]">
            <div className="body2-semibold">공연장</div>
            <div className="text-[12px] font-medium leading-normal tracking-[-0.02em] text-[#8A8585]">
              {reviewList.watchSit}
            </div>
          </div>
          <div className="flex flex-wrap justify-start gap-x-2 gap-y-4">
            {reviewList.placeReviews.map((lReview) => (
              <ReviewTag key={lReview.placeCategoryId} isPlace={true}>
                {lReview.categoryName}
              </ReviewTag>
            ))}
          </div>
        </div>
        {/* 좋아요 서버 api 개발 시 수정 예정 */}
        {/* <div className="pb-[170px]">
          <div
            className={`flex items-center space-x-1 ${isLiked ? "text-secondary2-100" : "text-grayscale-60"}`}
            onClick={() => setIsLiked((prev) => !prev)}
          >
            <Like />
            <span className="body2-medium">{reviewList.likeCount}</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};
