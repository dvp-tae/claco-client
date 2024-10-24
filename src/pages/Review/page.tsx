import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { CategoryTag } from "@/components/common/CategoryTag";
import { ReviewCard } from "@/components/Review/ReviewCard";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const options: string[] = ["별점 높은 순", "별점 낮은 순", "최신 순"];

export const ReviewPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>(options[0]);
  const navigate = useNavigate();

  const gotoBack = () => {
    navigate(-1);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="pt-[60px] px-6">
      <section className="relative flex justify-center mb-[53px]">
        <BackArrow onClick={gotoBack} className="absolute left-0" />
        <div className="headline2-bold">리뷰</div>
      </section>
      <section className="flex-col space-y-[10px] mb-[3px]">
        <div className="flex space-x-2">
          <CategoryTag categoryType="dance">무용</CategoryTag>
          <CategoryTag categoryType="ongoing">공연 중</CategoryTag>
        </div>
        <div className="flex-col">
          <div className="heading2-bold">
            유니버설발레단 〈호두까기 인형〉 - 성남
          </div>
          <div className="body2-medium text-grayscale-60">리뷰 184개</div>
        </div>
      </section>
      <section>
        <div
          ref={dropdownRef}
          className="relative flex items-center justify-end w-[80px] ml-auto space-x-2 cursor-pointer text-common-white mb-[19px]"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="caption-13">{selectOption}</div>
          <BackArrow
            width="4"
            height="8"
            viewBox="0 0 11 20"
            className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90" : "-rotate-90"} `}
          />
          <div
            className={`absolute top-6 bg-grayscale-10 py-[10px] px-5 rounded-[5px] transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            {isOpen ? (
              <ul className="text-center caption-13 space-y-[12px] w-[65px]">
                {options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectOption(option)}
                    className={`${selectOption === option ? "text-common-white" : "text-grayscale-60"}`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        <div className="flex-col space-y-[11px] pb-[100px]">
          {[...Array(4)].map((_, index) => (
            <ReviewCard key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};
