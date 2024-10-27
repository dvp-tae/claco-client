import { TypeButton } from "@/components/Onboarding/Registration";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ConfirmButton } from "@/components/common/Button";

export const SelectLocationPage = () => {
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);

  const handleLocationClick = (location: string) => {
    if (selectedLocation.includes(location)) {
      setSelectedLocation(selectedLocation.filter((loc) => loc !== location));
    } else {
      setSelectedLocation([...selectedLocation, location]);
    }
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/create/price");
  };

  const handleConfirmClick = () => {
    navigate("/create/concept");
  };

  return (
    <div className="w-full h-screen overflow-y-auto bg-background-dark flex flex-col">
      <div className="flex flex-col flex-grow w-full h-auto px-[24px] pt-[4.75rem] pb-[4.56rem] gap-[0.5rem]">
        <div className="flex flex-col gap-[2.44rem]">
          <div className="flex-col">
            <BackArrow className="mb-[1.19rem]" onClick={handleBackClick} />
            <Progress value={33.33} />
          </div>
          <span className="heading1-bold text-grayscale-90">
            울랄라님의 취향에 맞는
            <br />
            클래식 공연을 알아볼까요?
          </span>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-[1.56rem]">
            <span className="body1-medium text-grayscale-60">
              선호하는 공연장 위치를 모두 선택해주세요.
            </span>
            <div className="grid grid-cols-2 gap-[0.63rem] mb-[166px]">
              <TypeButton
                isChecked={selectedLocation.includes("서울")}
                onClick={() => handleLocationClick("서울")}
              >
                서울
              </TypeButton>
              <TypeButton
                isChecked={selectedLocation.includes("경기")}
                onClick={() => handleLocationClick("경기")}
              >
                경기
              </TypeButton>
              <TypeButton
                isChecked={selectedLocation.includes("인천")}
                onClick={() => handleLocationClick("인천")}
              >
                인천
              </TypeButton>
              <TypeButton
                isChecked={selectedLocation.includes("강원")}
                onClick={() => handleLocationClick("강원")}
              >
                강원
              </TypeButton>
              <TypeButton
                isChecked={selectedLocation.includes("충청")}
                onClick={() => handleLocationClick("충청")}
              >
                충청
              </TypeButton>
              <TypeButton
                isChecked={selectedLocation.includes("전라")}
                onClick={() => handleLocationClick("전라")}
              >
                전라
              </TypeButton>
              <TypeButton
                isChecked={selectedLocation.includes("경상")}
                onClick={() => handleLocationClick("경상")}
              >
                경상
              </TypeButton>
              <TypeButton
                isChecked={selectedLocation.includes("제주")}
                onClick={() => handleLocationClick("제주")}
              >
                제주
              </TypeButton>
            </div>
          </div>
          <ConfirmButton
            isChecked={selectedLocation.length > 0}
            onClick={handleConfirmClick}
            disabled={selectedLocation.length === 0}
          >
            다음
          </ConfirmButton>
        </div>
      </div>
    </div>
  );
};
