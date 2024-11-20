import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as Trash } from "@/assets/svgs/trash.svg";
import { ReactComponent as Edit } from "@/assets/svgs/Edit.svg";
import { ReactComponent as Star } from "@/assets/svgs/StarRating.svg";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DeleteClacoTicketModal } from "@/components/Ticket/Modal/Delete/ClacoTicket";
import { CategoryTag } from "@/components/common/CategoryTag";
import { PerformanceAttributes } from "@/components/Ticket/PerformanceAttributes";
import { ReviewTag } from "@/components/common/ReviewTag";
import { Modal } from "@/components/common/Modal";
import { useThumbnailModal } from "@/hooks/utils";
import { ThumbnailModal } from "@/components/common/Modal/ThumbnailModal";

import ClacoTicketImage1 from "@/assets/images/MyClacoTicket1.png";
import { TICKET_REVIEW_MOCK_DATA } from "@/components/Ticket/const";

export const ClacoTicketDetailPage = () => {
  const { id } = useParams();
  const ticketId = Number(id) - 1;
  const ticketReviewList = TICKET_REVIEW_MOCK_DATA[ticketId];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [viewingSeat, setViewingSeat] = useState<string>("");
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

  const gotoTicketReviewEdit = () => {
    navigate(`/ticket/${Number(id)}/edit`);
  };

  return (
    <div className="relative flex flex-col pt-[46px] items-center justify-center px-6 mb-[234px]">
      <ThumbnailModal
        isShow={isThumbnailShow}
        isAnimating={isAnimating}
        thumbsSwiper={thumbsSwiper}
        selectIndex={selectIndex}
        images={ticketReviewList.imageUrlS.map((image) => image.imageUrl)}
        onClose={handleImageClick}
        setThumbsSwiper={setThumbsSwiper}
      />
      <div className="flex justify-between items-center w-full mb-[27px] h-[26px]">
        <BackArrow onClick={gotoBack} />
        <Trash onClick={() => setIsModalOpen(true)} />
      </div>
      <div className="flex-col justify-start w-full space-y-2 mb-[54px]">
        <CategoryTag categoryType="무용" />
        <div className="heading2-bold">
          유니버설발레단 〈호두까기 인형〉 - 성남
        </div>
      </div>
      <div className="mb-[60px]">
        <img
          src={ClacoTicketImage1}
          alt="클라코 티켓 이미지"
          className="w-[213px] h-[471px]"
        />
      </div>
      <div className="w-full h-[154px] bg-grayscale-20 px-[27px] pt-[18px] pb-[45px] rounded-[5px] mb-12">
        <PerformanceAttributes
          categories={ticketReviewList.concertTags}
          title={"공연을 보며 이런 느낌이 떠올랐어요"}
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-start gap-[5px] mb-5">
          <div className="headline2-bold">나의 공연 감상</div>
          <Edit
            viewBox="0 0 18 18"
            width={14}
            height={14}
            className="text-grayscale-60"
            onClick={gotoTicketReviewEdit}
          />
        </div>
        <div className="flex justify-between mb-5">
          <div className="flex items-center gap-[3px] text-secondary2-100/100">
            <Star />
            <div className="body2-medium">4.0</div>
          </div>
          <div className="caption-12 text-grayscale-50">2024.11.11 작성</div>
        </div>
        <div className="mb-4 body2-medium">{ticketReviewList.content}</div>
        <div className="flex space-x-[11px] mb-[35px]">
          {ticketReviewList.imageUrlS?.map((image, index) => (
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
        <div className="mb-[60px]">
          <div className="headline2-bold mb-[15px]">공연장</div>
          <div className="flex flex-wrap justify-start gap-x-2 gap-y-4">
            {ticketReviewList.placeReviews.map((lReview) => (
              <ReviewTag key={lReview.placeCategoryId} isPlace={true}>
                {lReview.categoryName}
              </ReviewTag>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-5 headline2-bold">관람 정보</div>
          <div className="grid grid-cols-[100px_1fr] gap-y-4">
            <div className="headline2-bold text-grayscale-70">관람 날짜</div>
            <div className="body1-regular text-grayscale-90">
              {ticketReviewList.watchDate}
            </div>

            <div className="headline2-bold text-grayscale-70">공연장소</div>
            <div className="body1-regular text-grayscale-90">
              {ticketReviewList.watchPlace}
            </div>

            <div className="headline2-bold text-grayscale-70">회차</div>
            <div className="body1-regular text-grayscale-90">
              {ticketReviewList.watchRound}
            </div>

            <div className="headline2-bold text-grayscale-70">캐스팅</div>
            <div className="body1-regular text-grayscale-90 max-w-[240px] flex flex-wrap">
              {ticketReviewList.castings
                .split(",")
                .map((casting, index, array) => (
                  <span
                    key={index}
                    className={
                      index !== array.length - 1 ? "mr-[19px] mb-[19px]" : ""
                    }
                  >
                    {casting.trim()}
                  </span>
                ))}
            </div>

            <div className="flex items-center gap-[9px] headline2-bold text-grayscale-70">
              좌석
              {ticketReviewList.watchSit.trim().length === 0 ? (
                <Edit
                  viewBox="0 0 18 18"
                  width={14}
                  height={14}
                  onClick={() => setIsEditModalOpen(true)}
                />
              ) : null}
            </div>
            <div className="flex items-center body1-regular text-grayscale-90">
              {ticketReviewList.watchSit.trim().length === 0 ? null : (
                <>
                  {ticketReviewList.watchSit}
                  <Edit
                    viewBox="0 0 18 18"
                    width={14}
                    height={14}
                    onClick={() => setIsEditModalOpen(true)}
                    className="ml-2"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 모달 컴포넌트 영역 */}
      {isModalOpen && (
        <DeleteClacoTicketModal
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => null}
        />
      )}
      {isEditModalOpen && (
        <Modal
          positiveButtonText="확인"
          negativeButtonText="취소"
          onPositiveButtonClick={() => console.log(viewingSeat)}
          onNegativeButtonClick={() => setIsEditModalOpen(false)}
        >
          <div className="w-full flex flex-col items-center justify-center mt-[12.45px] mb-[37px] gap-[13.1px]">
            <span className="headline2-bold text-grayscale-80">
              관람 좌석을 입력해주세요
            </span>
            <input
              className="w-full h-[52px] rounded-[7px] text-center body2-medium text-grayscale-80 bg-grayscale-30 outline-none px-3"
              defaultValue={ticketReviewList.watchSit}
              onChange={(e) => setViewingSeat(e.target.value)}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};
