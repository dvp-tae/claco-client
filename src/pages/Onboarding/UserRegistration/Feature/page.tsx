import { FeatureButton } from "@/components/Onboarding/Registration";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ConfirmButton } from "@/components/common/Button";
import { features } from "./const";

export const SelectFeaturePage = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [progressValue, setProgressValue] = useState<number>(55.55);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [selectedAllFeature, setSelectedAllFeature] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleBackClick = () => {
    if (currentStep === 0) {
      navigate("/create/concept");
    } else {
      setCurrentStep(currentStep - 2);
    }
  };

  const handleFeatureClick = (feature: string) => {
    setSelectedFeature(feature);
  };

  const handleNextClick = () => {
    if (selectedFeature) {
      setSelectedAllFeature((prevFeatures) => [
        ...prevFeatures,
        selectedFeature,
      ]);
      setSelectedFeature(null);

      setProgressValue((prevValue) => Math.min(prevValue + 11.11, 100));
      if (progressValue === 99.99) setProgressValue(100);

      if (currentStep >= features.length - 2) {
        navigate("/create/complete");
        console.log(selectedAllFeature); // eslint 오류 방지용
      } else {
        setCurrentStep((prevStep) => prevStep + 2);
      }
    }
  };

  return (
    <div className="w-full h-screen overflow-y-auto bg-background-dark flex flex-col">
      <div className="flex flex-col flex-grow w-full h-auto px-[24px] pt-[4.75rem] pb-[4.56rem] gap-[0.5rem]">
        <div className="flex flex-col gap-[2.44rem]">
          <div className="flex-col">
            <BackArrow className="mb-[1.19rem]" onClick={handleBackClick} />
            <Progress value={progressValue} />
          </div>
          <span className="heading1-bold text-grayscale-90">
            울랄라님의 취향에 맞는
            <br />
            클래식 공연을 알아볼까요?
          </span>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-[1.56rem] mb-[107px]">
            <span className="body1-medium text-grayscale-60">
              선호하는 공연의 특징을 선택해주세요.
            </span>
            <div className="flex flex-col gap-[0.75rem]">
              {features.slice(currentStep, currentStep + 2).map((feature) => (
                <FeatureButton
                  key={feature.title}
                  isChecked={selectedFeature === feature.title}
                  onClick={() => handleFeatureClick(feature.title)}
                >
                  <span className="heading1-bold mb-[0.62rem]">
                    {feature.title}
                  </span>
                  <br />
                  <span className="caption-13">
                    {feature.description.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </span>
                </FeatureButton>
              ))}
            </div>
          </div>

          <ConfirmButton
            isChecked={!!selectedFeature}
            onClick={handleNextClick}
            disabled={!selectedFeature}
          >
            다음
          </ConfirmButton>
        </div>
      </div>
    </div>
  );
};
