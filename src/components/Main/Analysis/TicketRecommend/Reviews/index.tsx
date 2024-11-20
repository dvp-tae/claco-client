import { useTruncateText } from "@/hooks/utils";
import { REVIEW_MOCK_DATA_type } from "..";
import { ReactComponent as Chat } from "@/assets/svgs/chat.svg";

export type ReviewsProps = {
  data: REVIEW_MOCK_DATA_type;
};

export const Reviews = ({ data }: ReviewsProps) => {
  return (
    <div className="mt-[21px]">
      <div className="flex justify-center w-full headline1-bold mb-[18px]">
        {data.title}
      </div>
      <div className="w-[351px] h-[119px] mx-auto px-[15px] py-[17px] rounded-[3.52px] bg-grayscale-20">
        <div className="flex justify-start items-center space-x-[9px]">
          <Chat />
          <div className="headline2-bold text-common-white">
            {data.username}님의 리뷰
          </div>
        </div>
        <div className="mt-[14px] body2-medium text-grayscale-70">
          {useTruncateText(data.review, 64)}
        </div>
      </div>
    </div>
  );
};
