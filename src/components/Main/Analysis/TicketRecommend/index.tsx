import { ReactComponent as Arrow } from "@/assets/svgs/Arrow 2.svg";
import { TouchEvent, useEffect, useState } from "react";
import { Reviews } from "./Reviews";
import { TicketReviewSummary } from "@/types";
import { useGetRecommendClacoTicket } from "@/hooks/queries";
import { useNavigate } from "react-router-dom";

export const TicketRecommend = () => {
  const { data } = useGetRecommendClacoTicket();

  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null
  );
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [reviewContent, setReviewContent] = useState<TicketReviewSummary>({
    nickName: "",
    concertId: 0,
    concertName: "",
    content: "",
    createdAt: "",
  });
  const [isReviewVisible, setIsReviewVisible] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setReviewContent(data.result[0].ticketReviewSummary);
    }
  }, [data]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !data) return;

    const xDistance = touchStart.x - touchEnd.x;
    const yDistance = Math.abs(touchStart.y - touchEnd.y);

    if (yDistance > Math.abs(xDistance)) {
      return;
    }

    const minSwipeDistance = 50;
    const isLeftSwipe = xDistance > minSwipeDistance;
    const isRightSwipe = xDistance < -minSwipeDistance;

    if (!isLeftSwipe && !isRightSwipe) return;

    setIsReviewVisible(false);

    let nextIndex;
    if (isLeftSwipe) {
      nextIndex = (currentIndex + 1) % data.result.length;
    } else if (isRightSwipe) {
      nextIndex = (currentIndex - 1 + data.result.length) % data.result.length;
    } else {
      nextIndex = currentIndex;
    }
    setCurrentIndex(nextIndex);

    setTimeout(() => {
      setReviewContent(data.result[nextIndex].ticketReviewSummary);
      setIsReviewVisible(true);
    }, 400);
  };

  const getItemStyle = (index: number) => {
    const baseStyle =
      "w-[232px] absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out";

    const position = index - currentIndex;

    const normalizedPosition =
      position < -1 ? position + 3 : position > 1 ? position - 3 : position;

    if (normalizedPosition === 0) {
      return `${baseStyle} left-1/2 -translate-x-1/2 z-40 scale-100 opacity-100`;
    } else if (normalizedPosition === 1) {
      return `${baseStyle} left-[115%] -translate-x-1/2 z-20 scale-100 opacity-30`;
    } else {
      return `${baseStyle} left-[-15%] -translate-x-1/2 z-10 scale-100 opacity-30`;
    }
  };

  const handleGoToTicket = () => {
    const currentTicketId = data?.result[currentIndex].ticketInfoResponse.id;
    navigate(`/ticket/${currentTicketId}`);
  };

  return (
    <div className="pt-[22px] pb-[171px] relative">
      <div className="px-6 mb-[47px] leading-8 text-grayscale-90 heading2-bold">
        비슷한 취향을 가진 사람들의 공연 후기로 <br />
        클래식 경험의 폭을 넓혀보세요
      </div>
      <div
        className="relative flex items-center justify-center h-[470px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {data?.result.map((ticket, index) => (
          <div key={index} className={getItemStyle(index)}>
            <img
              src={ticket.ticketInfoResponse.ticketImage}
              alt="클라코티켓 이미지"
              className="w-[213px] h-[471px] object-contain"
            />
          </div>
        ))}
        <div className="z-30 absolute bottom-0 w-screen h-[186px] bg-gradient-to-t from-[#8F9AF8]/100 to-[#1C1C1C]/0 opacity-50" />
      </div>
      {/* 리뷰 영역 */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isReviewVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <Reviews data={reviewContent} />
      </div>
      <div
        className="absolute bottom-[120px] right-6 caption-13 flex-col space-y-[11px] text-grayscale-60 cursor-pointer"
        onClick={handleGoToTicket}
      >
        <Arrow />
        <div className="text-right">보러가기</div>
      </div>
    </div>
  );
};
