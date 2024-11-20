import { ReviewTag } from "@/components/common/ReviewTag";
import { ReactComponent as Required } from "@/assets/svgs/required.svg";
import { seatTags1, seatTags2 } from "@/pages/TicketCreate/const";
import { ReviewQuestionProps, SeatQuestionsProps } from "@/types";

export const ReviewQuestion = ({
  title,
  tags,
  selectedTag,
  onTagClick,
}: ReviewQuestionProps) => (
  <div className="flex flex-col mt-8">
    <div className="flex">
      <span className="headline2-bold text-grayscale-80">{title}</span>
      <Required />
    </div>
    <div className="flex flex-wrap mt-5 gap-2">
      {tags.map((tag) => (
        <ReviewTag
          key={tag}
          onClick={() => onTagClick(tag)}
          isSelected={selectedTag === tag}
          isPlace={true}
        >
          {tag}
        </ReviewTag>
      ))}
    </div>
  </div>
);

export const SeatQuestions = ({
  selectedTag1,
  selectedTag2,
  onTagClick1,
  onTagClick2,
}: SeatQuestionsProps) => {
  return (
    <div className="flex flex-col mt-8">
      <div className="flex">
        <span className="headline2-bold text-grayscale-80">
          Q. 좌석은 어땠나요?
        </span>
        <Required />
      </div>
      <div className="flex gap-2 mt-5">
        {seatTags1.map((tag) => (
          <ReviewTag
            key={tag}
            onClick={() => onTagClick1(tag)}
            isSelected={selectedTag1 === tag}
            isPlace={true}
          >
            {tag}
          </ReviewTag>
        ))}
      </div>
      <div className="flex gap-2 mt-[10px]">
        {seatTags2.map((tag) => (
          <ReviewTag
            key={tag}
            onClick={() => onTagClick2(tag)}
            isSelected={selectedTag2 === tag}
            isPlace={true}
          >
            {tag}
          </ReviewTag>
        ))}
      </div>
    </div>
  );
};
