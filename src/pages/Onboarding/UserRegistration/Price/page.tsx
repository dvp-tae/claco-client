import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ConfirmButton } from "@/components/common/Button";

export const SelectPricePage = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000000);

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value + 10000 <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value - 10000 >= minPrice) {
      setMaxPrice(value);
    }
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/create/profile");
  };

  const handleConfirmClick = () => {
    navigate("/create/location");
  };

  return (
    <div className="w-full h-screen overflow-y-auto bg-background-dark flex flex-col">
      <div className="flex flex-col flex-grow w-full h-auto px-[24px] pt-[4.75rem] pb-[4.56rem] gap-[0.5rem]">
        <div className="flex flex-col gap-[2.44rem]">
          <div className="flex-col">
            <BackArrow className="mb-[1.19rem]" onClick={handleBackClick} />
            <Progress value={22.22} />
          </div>
          <span className="heading1-bold text-grayscale-90">
            울랄라님의 취향에 맞는
            <br />
            클래식 공연을 알아볼까요?
          </span>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col mb-[312px]">
            <span className="body1-medium text-grayscale-60">
              선호하는 티켓 가격 범위를 설정해주세요.
            </span>
            <div className="flex self-center justify-center items-center bg-grayscale-30 px-[1.25rem] py-[0.75rem] rounded-[0.31rem] mt-[2.88rem]">
              <span className="body2-medium text-grayscale-90">
                {minPrice.toLocaleString()}원 ~ {maxPrice.toLocaleString()}원
              </span>
            </div>
            <div className="relative w-full h-[0.125rem] bg-grayscale-60 mt-[1.56rem]">
              <div
                className="absolute h-[0.125rem] bg-grayscale-90"
                style={{
                  left: `${(minPrice / 1000000) * 100}%`,
                  right: `${100 - (maxPrice / 1000000) * 100}%`,
                }}
              />
            </div>
            <div className="relative">
              <input
                type="range"
                min={0}
                max={1000000}
                step={10000}
                value={minPrice}
                onChange={handleMinPriceChange}
                className={`absolute w-full appearance-none bg-transparent top-[-9px]`}
              />
              <input
                type="range"
                min={0}
                max={1000000}
                step={10000}
                value={maxPrice}
                onChange={handleMaxPriceChange}
                className={`absolute w-full appearance-none bg-transparent top-[-9px]`}
              />
            </div>
            <div className="flex justify-between mt-[0.81rem]">
              <span className="body2-medium text-grayscale-90">0원</span>
              <span className="body2-medium text-grayscale-90">
                1,000,000원
              </span>
            </div>
          </div>
          <ConfirmButton isChecked={true} onClick={handleConfirmClick}>
            다음
          </ConfirmButton>
        </div>
      </div>
    </div>
  );
};
