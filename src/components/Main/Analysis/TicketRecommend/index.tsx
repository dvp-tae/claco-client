import { ReactComponent as Arrow } from "@/assets/svgs/Arrow 2.svg";
import { TouchEvent, useState } from "react";
import { Reviews } from "./Reviews";
import { ClacoTicket } from "@/components/common/ClacoTicket";

export type REVIEW_MOCK_DATA_type = {
  title: string;
  username: string;
  review: string;
};

const REVIEW_MOCK_DATA: REVIEW_MOCK_DATA_type[] = [
  {
    title: "백조의 호수",
    username: "달보라",
    review:
      "주요 무용수들의 기술은 정말 놀라웠습니다. 오데트 역을 맡은 주 무용수의 우아한 포즈와 뛰어난 스핀은 관객의 시선을 사로잡았습니다. 특히, 마지막 장면에서의 군무는 환상적이었고, 백조들의 일체감이 돋보였습니다. 모든 무용수가 조화를 이루며 춤출 때, 마치 한 몸처럼 느껴졌습니다.",
  },
  {
    title: "호두까기 인형",
    username: "시요밍",
    review:
      "주연 무용수들의 연기가 매우 인상적이었습니다. 줄리엣 역의 발레리나는 섬세한 감정 표현과 기품 있는 동작으로 관객들을 매료시켰습니다. 특히, 발코니 장면에서의 2인무는 감동적이었고, 두 주역의 호흡이 빼어났습니다. 모든 장면에서 감정과 기교가 완벽히 어우러져, 진정한 사랑을 느낄 수 있었습니다.",
  },
  {
    title: "히사이시조",
    username: "밍밍보따리",
    review:
      "전문 무용수들의 실력이 눈부시게 빛났습니다. 지젤 역을 맡은 발레리나의 날렵한 동작과 뛰어난 연기는 보는 이의 마음을 울렸습니다. 특히, 2막의 윌리들의 군무는 환상적이었고, 유령들의 통일성이 돋보였습니다. 모든 출연진이 하나가 되어 춤출 때, 진한 감동이 전해졌습니다.",
  },
];

export const TicketRecommend = () => {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null
  );
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [reviewContent, setReviewContent] = useState(REVIEW_MOCK_DATA[0]);
  const [isReviewVisible, setIsReviewVisible] = useState(true);

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
    if (!touchStart || !touchEnd) return;

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
      nextIndex = (currentIndex + 1) % REVIEW_MOCK_DATA.length;
    } else if (isRightSwipe) {
      nextIndex =
        (currentIndex - 1 + REVIEW_MOCK_DATA.length) % REVIEW_MOCK_DATA.length;
    } else {
      nextIndex = currentIndex;
    }
    setCurrentIndex(nextIndex);

    setTimeout(() => {
      setReviewContent(REVIEW_MOCK_DATA[nextIndex]);
      setTimeout(() => {
        setIsReviewVisible(true);
      }, 100);
    }, 500);
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
        {REVIEW_MOCK_DATA.map((review, index) => (
          <div key={index} className={getItemStyle(index)}>
            <ClacoTicket data={review} />
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

      <div className="absolute bottom-[120px] right-6 caption-13 flex-col space-y-[11px] text-grayscale-60 cursor-pointer">
        <Arrow />
        <div className="text-right">보러가기</div>
      </div>
    </div>
  );
};
