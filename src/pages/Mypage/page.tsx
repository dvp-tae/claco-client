import { ReactComponent as Edit } from "@/assets/svgs/Edit.svg";
import { ReactComponent as Settings } from "@/assets/svgs/settings.svg";
import { ReactComponent as UserProfile } from "@/assets/svgs/UserProfile.svg";
import { LikedShow } from "@/components/Mypage/LikedShow";
import { PreferenceAnalysis } from "@/components/Mypage/PreferenceAnalysis";
import { PreferenceSettings } from "@/components/Mypage/PreferenceAnalysis/PreferenceSettings";
import { UserSettings } from "@/components/Mypage/UserSettings";
import { useState } from "react";

export const MyPage = () => {
  const [selectedTab, setSelectedTab] = useState("나의 취향 분석");
  const [isPreferenceSettingsOpen, setIsPreferenceSettingsOpen] =
    useState(false);
  const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false);

  const tabs = ["나의 취향 분석", "좋아요한 공연"];

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const openPreferenceSettings = () => {
    window.scrollTo({ top: 0 });
    setIsPreferenceSettingsOpen(true);
  };

  const handlePreferenceConfirmClick = () => {
    setIsPreferenceSettingsOpen(false);
  };

  const handleUserConfirmClick = () => {
    setIsUserSettingsOpen(false);
  };

  return (
    <div className="relative px-6 pt-[46px] pb-[52px]">
      {isPreferenceSettingsOpen ? (
        <PreferenceSettings
          onBack={() => setIsPreferenceSettingsOpen(false)}
          onClick={handlePreferenceConfirmClick}
        />
      ) : isUserSettingsOpen ? (
        <div className="absolute inset-0 px-6">
          <UserSettings
            onBack={() => setIsUserSettingsOpen(false)}
            onClick={handleUserConfirmClick}
          />
        </div>
      ) : (
        <>
          <div className="flex flex-col">
            <div className="relative items-center text-center mb-[49px]">
              <span className="headline2-bold text-grayscale-80">
                마이페이지
              </span>
              <Settings className="absolute top-0 right-0 " />
            </div>
            <div className="flex flex-col items-center justify-center mb-[37px] relative">
              <div className="relative rounded-full p-[27px] bg-grayscale-30 mb-4">
                <UserProfile />
                <div
                  className="absolute cursor-pointer -bottom-3 -right-3 p-[11px] rounded-full bg-dark"
                  onClick={() => setIsUserSettingsOpen(true)}
                >
                  <Edit />
                </div>
              </div>

              <span className="headline2-bold text-white">달보라</span>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center mb-[23px]">
            <div className="relative flex w-full justify-between mb-[14px] px-9">
              {tabs.map((tab) => (
                <span
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`text-center cursor-pointer pb-2 ${
                    selectedTab === tab
                      ? "headline2-bold text-white px-[17px] border-b-2 border-grayscale-80 z-10"
                      : "headline2-bold text-grayscale-60 px-[17px] border-b-2 border-grayscale-30"
                  }`}
                >
                  {tab}
                </span>
              ))}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-grayscale-30" />
            </div>
          </div>
          {selectedTab === "나의 취향 분석" ? (
            <PreferenceAnalysis onSettingsOpen={openPreferenceSettings} />
          ) : (
            <LikedShow />
          )}
        </>
      )}
    </div>
  );
};
