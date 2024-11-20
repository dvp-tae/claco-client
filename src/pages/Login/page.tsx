import backgroundImage from "../../assets/images/loginbackground.png";
import { ReactComponent as ClacoMain } from "@/assets/svgs/Claco_Main.svg";

export const LoginPage = () => {
  // 카카오 인증 서버로 리다이렉트
  const handleLogin = () => {
    window.location.replace(`${import.meta.env.VITE_LOGIN_SERVER_URL}`);
  };

  return (
    <div
      className="w-full h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col w-full px-[1.5rem] h-screen justify-end gap-[1.8rem] pb-[9rem]">
        <div className="flex flex-col pl-[0.63rem]">
          <div className="flex items-center gap-[0.56rem]">
            <ClacoMain />
            <span className="self-end pt-[0.19rem] title3-bold text-grayscale-90">
              에
            </span>
          </div>
          <span className="items-center title3-bold text-grayscale-90">
            오신 것을 환영해요!
          </span>
        </div>
        <button
          className="flex w-full bg-login items-center justify-center rounded-[0.31rem] py-[0.88rem]"
          onClick={handleLogin}
        >
          <span className="body1-regular text-grayscale-20">
            카카오로 시작하기
          </span>
        </button>
      </div>
    </div>
  );
};
