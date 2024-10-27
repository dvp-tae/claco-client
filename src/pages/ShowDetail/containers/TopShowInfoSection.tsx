import { ReactComponent as ClacoMain } from "@/assets/svgs/Claco_Main.svg";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { CategoryTag } from "@/components/common/CategoryTag";
import Poster10 from "@/assets/images/poster10.gif";
import { ReactComponent as Heart } from "@/assets/svgs/Heart.svg";
import { ReactComponent as Megaphone } from "@/assets/svgs/Megaphone.svg";
import { ReactComponent as Book } from "@/assets/svgs/Book.svg";
import { Genre } from "@/components/common/Genre";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TopShowInfoSection = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const gotoBack = () => {
    navigate(-1);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const description =
    "특유의 감수성으로 풍부하고 섬세한 연주를 선보이는 유명 피아니스트 랑랑의 공연이에요 섬세한 연주를 선보이는 유명 피아니스트 랑랑의 공연이에요";

  return (
    <section className="px-6">
      <ClacoMain className="mb-[38px]" />

      <BackArrow
        width="8"
        height="15"
        viewBox="0 0 11 20"
        className="mb-[37px] cursor-pointer"
        onClick={gotoBack}
      />

      <div className="flex space-x-2 mb-[11px]">
        <CategoryTag categoryType="dance">무용</CategoryTag>
        <CategoryTag categoryType="ongoing">공연 중</CategoryTag>
      </div>

      <span className="heading2-bold text-grayscale-80">
        유니버설발레단 〈호두까기 인형〉 - 성남
      </span>

      <div className="flex gap-[21px] mt-7">
        <div className="relative w-[130px] h-[173px]">
          <div className="absolute top-[10px] left-[9px] z-10">
            <Heart />
          </div>
          <img
            src={Poster10}
            alt="poster"
            className="absolute top-0 left-0 z-0 object-cover w-full h-full rounded-[5px]"
          />
        </div>
        <div className="flex flex-col mb-[45px]">
          <div className="flex space-x-[10px] mb-[23px]">
            <div className="flex flex-col space-y-2 caption-13 text-grayscale-70">
              <span>장소</span>
              <span>기간</span>
              <span>시간</span>
              <span>연령</span>
              <span>가격</span>
            </div>
            <div className="flex flex-col space-y-2 caption-13 text-grayscale-80">
              <span>성남시 분당구</span>
              <span>2024.11.29~2024.11.30</span>
              <span>120분(인터미션 20분 포함)</span>
              <span>만 5세 이상</span>
              <span>20,000원-90,000원</span>
            </div>
          </div>
          <a href="#" className="caption-12 text-grayscale-70 underline">
            예매하러가기
          </a>
        </div>
      </div>

      <div className="flex flex-col bg-grayscale-20 rounded-[5px] px-[21px] pt-[30px] pb-[35px] mb-[26px]">
        <div className="flex space-x-2 items-center mb-[18px]">
          <Megaphone />
          <span className="headline2-bold">Claco 큐레이션</span>
        </div>

        <p
          className={`relative body2-medium text-grayscale-70 mb-7 overflow-hidden ${
            isExpanded ? "max-h-none" : "max-h-[41px]"
          }`}
        >
          {isExpanded ? (
            description
          ) : (
            <>
              {description.slice(0, 48)}
              <span className="relative">
                <span className="absolute inset-y-0 right-0 w-6 bg-gradient-to-r from-transparent to-[#242424]/80"></span>
                {description.slice(48, 51)}
              </span>
              <button
                onClick={toggleExpanded}
                className="body2-medium text-grayscale-80 ml-1"
              >
                더 보기
              </button>
            </>
          )}
        </p>

        <div className="flex space-x-2 items-center mb-[22px]">
          <Book />
          <span className="headline2-bold">공연 성격 분석</span>
        </div>
        <div className="flex justify-between px-[13px]">
          <Genre
            genreType={"Majestic"}
            className="caption-12 text-grayscale-70"
            size={43}
          />
          <Genre
            genreType={"Romantic"}
            className="caption-12 text-grayscale-70"
            size={43}
          />
          <Genre
            genreType={"Lyrical"}
            className="caption-12 text-grayscale-70"
            size={43}
          />
          <Genre
            genreType={"Fresh"}
            className="caption-12 text-grayscale-70"
            size={43}
          />
          <Genre
            genreType={"Classical"}
            className="caption-12 text-grayscale-70"
            size={43}
          />
        </div>
      </div>
    </section>
  );
};

export default TopShowInfoSection;
