import { TypeButton } from "@/components/Onboarding/Registration";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ConfirmButton } from "@/components/common/Button";

export const SelectProfilePage = () => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  const handleGenderClick = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleAgeClick = (age: string) => {
    setSelectedAge(age);
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/create");
  };

  const handleConfirmClick = () => {
    navigate("/create/price");
  };

  return (
    <div className="w-full h-screen overflow-y-auto bg-background-dark flex flex-col">
      <div className="flex flex-col flex-grow w-full h-auto px-[24px] pt-[4.75rem] gap-[0.5rem] pb-[4.56rem]">
        <div className="flex flex-col gap-[2.44rem]">
          <div className="flex-col">
            <BackArrow className="mb-[1.19rem]" onClick={handleBackClick} />
            <Progress value={11.11} />
          </div>
          <span className="heading1-bold text-grayscale-90">
            울랄라님의 취향에 맞는
            <br />
            클래식 공연을 알아볼까요?
          </span>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex-col">
            <span className="body1-medium text-grayscale-60">
              성별과 연령대를 알려주세요.
            </span>
            <div className="flex flex-col gap-[0.87rem] mt-[2.12rem] mb-[2.88rem]">
              <span className="body1-medium text-grayscale-80">성별</span>
              <div className="grid grid-cols-2 gap-[0.62rem]">
                <TypeButton
                  isChecked={selectedGender === "남성"}
                  onClick={() => handleGenderClick("남성")}
                >
                  남성
                </TypeButton>
                <TypeButton
                  isChecked={selectedGender === "여성"}
                  onClick={() => handleGenderClick("여성")}
                >
                  여성
                </TypeButton>
              </div>
            </div>
            <div className="flex flex-col gap-[0.87em] mb-[56px]">
              <span className="body1-medium text-grayscale-80">연령대</span>
              <div className="grid grid-cols-2 gap-[0.62rem]">
                <TypeButton
                  isChecked={selectedAge === "10대"}
                  onClick={() => handleAgeClick("10대")}
                >
                  10대
                </TypeButton>
                <TypeButton
                  isChecked={selectedAge === "20대"}
                  onClick={() => handleAgeClick("20대")}
                >
                  20대
                </TypeButton>
                <TypeButton
                  isChecked={selectedAge === "30대"}
                  onClick={() => handleAgeClick("30대")}
                >
                  30대
                </TypeButton>
                <TypeButton
                  isChecked={selectedAge === "40대"}
                  onClick={() => handleAgeClick("40대")}
                >
                  40대
                </TypeButton>
                <TypeButton
                  isChecked={selectedAge === "50대"}
                  onClick={() => handleAgeClick("50대")}
                >
                  50대
                </TypeButton>
                <TypeButton
                  isChecked={selectedAge === "60대 이상"}
                  onClick={() => handleAgeClick("60대 이상")}
                >
                  60대 이상
                </TypeButton>
              </div>
            </div>
          </div>
          <ConfirmButton
            isChecked={!!selectedGender && !!selectedAge}
            onClick={handleConfirmClick}
            disabled={!(selectedGender && selectedAge)}
          >
            다음
          </ConfirmButton>
        </div>
      </div>
    </div>
  );
};
