import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { PreferenceAnalysisProps } from "@/types";
import { ClacoAnalysisCard } from "@/components/common/ClacoAnalysisCard";

export const PreferenceAnalysis = ({
  onSettingsOpen,
}: PreferenceAnalysisProps) => {
  return (
    <div className="min-h-screen flex flex-col pb-[79px]">
      <ClacoAnalysisCard type="mypage" />
      <div className="border-2 border-grayscale-30 mb-[19px] mt-[29px]" />
      <div className="flex items-center justify-between">
        <span className="text-white headline2-bold">나의 취향 정보 수정</span>
        <BackArrow
          className="rotate-180 cursor-pointer"
          onClick={onSettingsOpen}
        />
      </div>
    </div>
  );
};
