import { ReactComponent as StarRating } from "@/assets/svgs/StarRating.svg";
import { ReviewSummaryCardProps } from "@/types";

export const ReviewSummaryCard = ({ username, rating, reviewSummaryContent }: ReviewSummaryCardProps) => {
    return (
    <div className="w-[194px] y-[112px] py-[14px] pl-4 pr-[14px] bg-grayscale-40 rounded-[5px]">
      <div className="flex h-[22px] space-x-[50px] mb-[15px]">
        <div className="flex items-center body2-semibold pt-[3px]">
            <span className="text-white mr-[6px]">{username}</span>
            <StarRating/>
            <span className="text-secondary-2 ml-[3px]">{rating.toFixed(1)}</span>
        </div>
        <a href="/show/1/reviews/1" className="caption-12 text-grayscale-60 underline self-start pb-1">더 보기</a>
      </div>

      <span className="body2-semibold text-white leading-none tracking-[-0.28px]">{reviewSummaryContent}</span>
    </div>
  );
};
