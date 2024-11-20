import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as UserProfile } from "@/assets/svgs/UserProfile.svg";
import { ConfirmButton } from "@/components/common/Button";
import { Nickname } from "@/components/common/Nickname";
import { SettingsProps } from "@/types";
import { useState } from "react";

export const UserSettings = ({ onBack, onClick }: SettingsProps) => {
  const [nickname, setNickname] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleConfirmClick = () => {
    if (isChecked) {
      console.log(nickname); // 나중에 api 연동
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      setProfileImage(file);
    }
  };

  return (
    <div className="pt-[46px] flex flex-col h-screen justify-between pb-[100px]">
      <div className="flex-col">
        <div className="relative flex items-center justify-center mb-[41px]">
          <BackArrow
            className="absolute top-0 left-0 cursor-pointer"
            onClick={onBack}
          />
          <span className="headline2-bold text-grayscale-80">프로필 설정</span>
        </div>
        <div className="flex flex-col gap-[18px] mb-12">
          <span className="headline1-bold text-grayscale-90">내 정보</span>
          <div className="flex gap-5">
            <div className="rounded-full bg-grayscale-30 mb-4">
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile Preview"
                  className="w-[84px] h-[84px] max-w-[84px] max-h-[84px] rounded-full object-cover"
                />
              ) : (
                <UserProfile className="p-[27px] w-[84px] h-[84px] max-w-[84px] max-h-[84px]" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="headline2-bold text-white mb-[10px]">
                달보라
              </span>
              <label className="w-fit flex items-center justify-center text-center px-[14px] py-[6px] border border-grayscale-70 rounded-[5px] mb-2 cursor-pointer">
                <span className="caption-12 text-center text-grayscale-80">
                  프로필 이미지 업로드
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              <span className="caption-12 text-grayscale-60">
                *10MB 이내의 이미지 파일을 업로드 해주세요.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="headline1-bold text-grayscale-90">닉네임 설정</span>
          <Nickname
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            setNickname={setNickname}
          />
        </div>
      </div>

      <ConfirmButton
        isChecked={isChecked}
        onClick={() => {
          onClick();
          handleConfirmClick();
        }}
        disabled={!isChecked}
        className="w-full"
      >
        적용하기
      </ConfirmButton>
    </div>
  );
};
