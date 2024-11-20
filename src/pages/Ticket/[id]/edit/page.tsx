import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { TextReview } from "@/components/Ticket/AudienceReview/ReviewContents/TextReview";
import { StarRating } from "@/components/Ticket/AudienceReview/StarRating";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ClacoTicketReviewEditPage = () => {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");
  const navigate = useNavigate();

  const gotoBack = () => {
    navigate(-1);
  };
  return (
    <div className="pt-[60px] px-6">
      <section className="relative flex justify-center mb-[68px]">
        <BackArrow onClick={gotoBack} className="absolute left-0" />
        <div className="headline2-bold">관람 후기</div>
      </section>
      <section className="mb-[82px]">
        <StarRating rating={rating} onRatingChange={setRating} />
      </section>
      <section>
        <TextReview value={reviewText} onChange={setReviewText} />
      </section>
    </div>
  );
};
