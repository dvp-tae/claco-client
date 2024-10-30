import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/images/loginbackground.png";
import logo from "../../assets/images/logo.png";

export const LoginPage = () => {
  const navigate = useNavigate();
  const gotoTOS = () => {
    navigate("/tos");
  };
  return (
    <div
      className="w-full h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col w-full px-[1.5rem] h-screen justify-end gap-[1.8rem] pb-[9rem]">
        <div className="flex flex-col pl-[0.63rem]">
          <div className="flex items-center gap-[0.56rem]">
            <img
              className="self-center py-[0.38rem]"
              src={logo}
              alt="로고 이미지"
            />
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
          onClick={gotoTOS}
        >
          <span className="body1-regular text-grayscale-20">
            카카오로 시작하기
          </span>
        </button>
      </div>
    </div>
  );
};
