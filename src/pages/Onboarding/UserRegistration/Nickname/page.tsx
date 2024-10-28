import { ReactComponent as ErrorIcon } from "@/assets/svgs/errorIcon.svg";
import { ReactComponent as AgreeIcon } from "@/assets/svgs/agreeIcon.svg";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfirmButton } from "@/components/common/Button";

export const NicknameCreatePage = () => {
  const [nickname, setNickname] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [hasStartedTyping, setHasStartedTyping] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleConfirmClick = () => {
    if (isChecked) {
      navigate("/create/profile");
    }
  };
  const validateNickname = (name: string): string => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    if (name.length < 2) {
      return "2글자 이상 작성해주세요";
    } else if (specialCharRegex.test(name)) {
      return "특수문자는 사용할 수 없어요";
    }
    return "";
  };

  // 닉네임 중복 검사

  useEffect(() => {
    if (hasStartedTyping) {
      const error = validateNickname(nickname);
      setErrorMessage(error);
      setIsChecked(!error);
    }
  }, [nickname, hasStartedTyping]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    if (!hasStartedTyping) {
      setHasStartedTyping(true);
    }
  };

  const handleBackClick = () => {
    navigate("/tos");
  };

  return (
    <div className="w-full h-screen overflow-y-auto bg-background-dark">
      <div className="flex flex-col flex-grow w-full h-full justify-between px-[24px] pt-[4.75rem] pb-[4.56rem]">
        <div className="flex-col">
          <BackArrow className="mb-[3.12rem]" onClick={handleBackClick} />
          <span className="heading1-bold text-grayscale-80">
            닉네임을 등록해주세요
          </span>
          <div className="flex flex-col mt-[1.62rem] gap-[0.81rem] h-[514px]">
            <div
              className={`flex bg-grayscale-30 justify-between rounded-[0.44rem] p-[1.06rem] border ${
                hasStartedTyping
                  ? errorMessage
                    ? "border-system-error"
                    : "border-system-positive"
                  : "border-dark"
              }`}
            >
              <input
                className="bg-grayscale-30 outline-none w-full body2-medium text-grayscale-80"
                value={nickname}
                onChange={handleInputChange}
                maxLength={15}
              />
              <span className="caption-12 tracking-[-0.015rem] self-center text-grayscale-60">
                {nickname.length}/15
              </span>
            </div>
            {hasStartedTyping && errorMessage ? (
              <div className="flex caption-12 items-start text-system-error gap-[0.25rem] pb-[0.6rem]">
                <ErrorIcon />
                <span className="self-center">{errorMessage}</span>
              </div>
            ) : hasStartedTyping ? (
              <div className="flex caption-12 items-start text-system-positive gap-[0.25rem] pb-[0.6rem]">
                <AgreeIcon />
                <span className="self-center">사용 가능한 닉네임이에요</span>
              </div>
            ) : null}
            <div className="flex flex-col caption-12 text-grayscale-60">
              <span>*최소 2글자 이상 사용할 수 있어요</span>
              <span>*특수문자는 사용할 수 없어요</span>
            </div>
          </div>
        </div>
        <ConfirmButton isChecked={isChecked} onClick={handleConfirmClick} disabled={!isChecked}>
          확인
        </ConfirmButton>
      </div>
    </div>
  );
};
