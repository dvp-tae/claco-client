import { Progress } from "@/components/ui/progress";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ConfirmButton } from "@/components/common/Button";
import { ReviewContents } from "@/components/Ticket/AudienceReview/ReviewContents";
import { StarRating } from "@/components/Ticket/AudienceReview/StarRating";
import { KeywordTags } from "@/components/Ticket/AudienceReview/KeywordTags";
import {
  ReviewQuestion,
  SeatQuestions,
} from "@/components/Ticket/AudienceReview/ReviewQuestions";
import { Modal } from "@/components/common/Modal";
import { accessibilityTags, sightTags, soundTags } from "../const";

export const TicketReviewPage = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [selectedKeywordTags, setSelectedKeywordTags] = useState<string[]>([]);
  const [selectedSoundTag, setSelectedSoundTag] = useState<string | null>(null);
  const [selectedSeatTag1, setSelectedSeatTag1] = useState<string | null>(null);
  const [selectedSeatTag2, setSelectedSeatTag2] = useState<string | null>(null);
  const [selectedSightTag, setSelectedSightTag] = useState<string | null>(null);
  const [selectedAccessibilityTag, setSelectedAccessibilityTag] = useState<
    string | null
  >(null);
  const [reviewText, setReviewText] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBackClick = () => {
    handleOpenModal();
  };

  const handleKeywordTagClick = (tag: string) => {
    setSelectedKeywordTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      }
      if (prevTags.length < 5) {
        return [...prevTags, tag];
      }
      return prevTags;
    });
  };

  const handleConfirmClick = () => {
    navigate("/ticketcreate/download");
  };

  useEffect(() => {
    const allRequiredSelected =
      rating >= 0 &&
      selectedKeywordTags.length > 0 &&
      selectedSoundTag !== null &&
      selectedSeatTag1 !== null &&
      selectedSeatTag2 !== null &&
      selectedSightTag !== null &&
      selectedAccessibilityTag !== null &&
      reviewText.length > 0;

    setIsComplete(allRequiredSelected);
  }, [
    rating,
    selectedKeywordTags,
    selectedSoundTag,
    selectedSeatTag1,
    selectedSeatTag2,
    selectedSightTag,
    selectedAccessibilityTag,
    reviewText,
  ]);

  return (
    <div className="flex flex-col min-h-screen px-[24px] pt-[46px] pb-[60px]">
      <div className="flex flex-col gap-[33px]">
        <div className="relative flex items-center justify-center">
          <BackArrow
            width="9"
            height="18"
            viewBox="0 0 11 20"
            className="absolute left-0"
            onClick={handleBackClick}
          />
          <span className="headline2-bold text-grayscale-80">티켓 등록</span>
        </div>
        <Progress value={80} />
      </div>

      {isModalOpen && (
        <Modal
          positiveButtonText="계속하기"
          negativeButtonText="나가기"
          onPositiveButtonClick={handleCloseModal}
          onNegativeButtonClick={() => navigate("/ticketbook")}
        >
          <div className="flex flex-col items-center justify-center mt-[13px] mb-[30px]">
            <span className="headline2-bold text-grayscale-80">
              티켓 등록을 그만두시겠어요?
            </span>
            <span className="caption-12 text-grayscale-70">
              입력된 정보는 저장되지 않습니다
            </span>
          </div>
        </Modal>
      )}

      <StarRating rating={rating} onRatingChange={setRating} />
      <KeywordTags
        selectedTags={selectedKeywordTags}
        onTagClick={handleKeywordTagClick}
      />
      <ReviewQuestion
        title="Q. 음향은 어땠나요?"
        tags={[...soundTags]}
        selectedTag={selectedSoundTag}
        onTagClick={setSelectedSoundTag}
      />
      <SeatQuestions
        selectedTag1={selectedSeatTag1}
        selectedTag2={selectedSeatTag2}
        onTagClick1={setSelectedSeatTag1}
        onTagClick2={setSelectedSeatTag2}
      />
      <ReviewQuestion
        title="Q. 시야는 어땠나요?"
        tags={[...sightTags]}
        selectedTag={selectedSightTag}
        onTagClick={setSelectedSightTag}
      />
      <ReviewQuestion
        title="Q. 접근성은 어땠나요?"
        tags={[...accessibilityTags]}
        selectedTag={selectedAccessibilityTag}
        onTagClick={setSelectedAccessibilityTag}
      />

      <ReviewContents
        value={reviewText}
        onChange={setReviewText}
        files={files}
        onFileChange={(e) =>
          setFiles([...files, ...Array.from(e.target.files || [])])
        }
      />

      <ConfirmButton
        isChecked={isComplete}
        onClick={handleConfirmClick}
        disabled={!isComplete}
      >
        완료
      </ConfirmButton>
    </div>
  );
};
